
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NameListComponent } from "#components/name-list/name-list.component";
import { AbilityEffectChangeEntry, AbilityEffectEntry, PokemonAbility } from '#types/entity/ability.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NameListComponent]
})
export class AbilityComponent implements OnInit {
  @Input({ required: true }) data!: PokemonAbility;

  lang = 'en';
  effectChangeEntries!: AbilityEffectChangeEntry[];
  effectEntry: AbilityEffectEntry | null = null;

  b = this.data.flavor_text_entries;

  ngOnInit() {
    this.effectChangeEntries = this.getEffectChangeEntries();
    this.effectEntry = this.getEffectEntry();
  }

  findEffectChangeByLanguage() {
    return this.data.effect_changes
      .find(({ effect_entries }) => {
        return effect_entries.find(({ language }) => language.name === this.lang) ?? null;
      });
  }

  findEffectEntriesByLanguage() {
    return this.data.effect_entries
      .find(({ language }) => {
        return language.name === this.lang;
      }) ?? null;
  }

  getEffectChangeEntries(): AbilityEffectChangeEntry[] {
    const filtered = this.findEffectChangeByLanguage();

    if (!filtered) {
      return [];
    }

    return filtered.effect_entries.filter(({ language }) => language.name === this.lang);
  }

  getEffectEntry(): AbilityEffectEntry | null {
    return this.findEffectEntriesByLanguage();
  }
}
