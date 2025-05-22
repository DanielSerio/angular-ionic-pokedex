import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-stat-table-row',
  templateUrl: './stat-table-row.component.html',
  styleUrls: ['./stat-table-row.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class StatTableRowComponent implements OnInit {
  // The label for the state tables "column"
  @Input({ required: true }) label!: string;
  // the value for the state tables "column"
  @Input() value?: string | number | null;

  // the value columns props
  printValue!: {
    muted?: boolean;
    text: string;
  };

  ngOnInit() {
    this.printValue = this.getFormatted(this.value);
  }

  private getFormatted(val?: string | number | null) {
    const mutedDefault = {
      muted: true,
      text: '--'
    };

    const acceptable = ['string', 'number'];

    if (!acceptable.includes(typeof val)) {
      return mutedDefault;
    }

    if (typeof val === 'number') {
      val = `${val}`;
    }

    const trimmed = `${val}`.trim();

    if (!trimmed) {
      return mutedDefault;
    }

    return {
      text: trimmed
    };
  }
}
