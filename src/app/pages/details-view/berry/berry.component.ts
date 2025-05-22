import { Berry } from '#types/entity/berry.types';
import { Component, Input, OnInit } from '@angular/core';
import { BerryFlavorProfileComponent } from "../../../components/berry-flavor-profile/berry-flavor-profile.component";

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.scss'],
  imports: [BerryFlavorProfileComponent],
})
export class BerryComponent implements OnInit {
  @Input({ required: true }) data!: Berry;
  flavorProfile!: Record<string, number>;

  constructor() { }

  ngOnInit() {
    this.flavorProfile = this.getFlavorProfile();
  }

  private getFlavorProfile(): Record<string, number> {
    const profile: Record<string, number> = {};
    const total = this.data.flavors.reduce((sum, { potency }) => {
      return sum + potency;
    }, 0);

    for (const result of this.data.flavors) {
      const { flavor, potency } = result;
      profile[flavor.name] = (potency / total);
    }

    return profile;
  }
}
