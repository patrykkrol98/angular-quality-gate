import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SightseeingPoint } from '../models/sightseeing-point';
import { SightsService } from '../services/sights.service';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {

  sights: SightseeingPoint[];
  selectedSight: SightseeingPoint;

  constructor(private sightsService: SightsService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }

  open(content: any, sight: SightseeingPoint) {
    this.selectedSight = sight;
    this.modalService.open(content);
  }
}
