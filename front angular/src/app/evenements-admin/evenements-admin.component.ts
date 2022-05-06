import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from 'src/service/products.service';
import { AddEventComponent } from '../add-event/add-event.component';
import { Event } from '../model/Event';

@Component({
  selector: 'app-evenements-admin',
  templateUrl: './evenements-admin.component.html',
  styleUrls: ['./evenements-admin.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css'
  ]
})
export class EvenementsAdminComponent implements OnInit {

  listeven: any;

  imagePath: any;

  constructor(
    private servp: ProductsService,
    private dg: MatDialog,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.refreshFeed();
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  refreshFeed() {
    this.servp.getAll().subscribe(res => {
      this.listeven = res
    });
  }

  addEventDialog() {
    this.dg.open(AddEventComponent).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }


  confirmDelete(idEvent: number) {
    this.dg.open(ConfirmDeleteComponent, {
      data: {
        'id': idEvent
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  openUpdate(event) {
    this.dg.open(UpdateEventComponent, {
      data: {
        'event': event
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  getParticiapnts(idEvent): any {
    this.servp.getParticipants(idEvent).subscribe(res => {
      return res.length();
    })
  }

  pushArchive(idEvent : number){
    this.servp.archiveEvent(idEvent).subscribe(()=>{
      this.refreshFeed();
    })
  }

  pushUnarchive(idEvent : number){
    this.servp.unarchiveEvent(idEvent).subscribe(()=>{
      this.refreshFeed();
    })
  }

}


@Component({
  selector: 'confirm-delete-event',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./evenements-admin.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private thisDialog: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private serv: ProductsService,
    private sb: MatSnackBar
  ) { }

  id: number;

  ngOnInit(): void {
    this.id = this.data['id']
  }

  no() {
    this.thisDialog.close();
  }

  yes() {
    this.serv.deleteEvent(this.data['id']).subscribe(() => {
      this.thisDialog.close();
      this.sb.open('Evenement Supprimé', 'Ok', {
        duration: 3000
      })
    })
  }




}

@Component({
  selector: 'update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./evenements-admin.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class UpdateEventComponent implements OnInit {

  form: FormGroup;

  constructor(private serv: ProductsService,
    private thisDg: MatDialogRef<UpdateEventComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private sb: MatSnackBar
  ) { }


  event: Event;

  ngOnInit(): void {
    this.event = new Event();
    // console.log(new Date(this.data['event'].dateStart).toISOString().slice(0,10))
    // console.log(new Date(this.data['event'].dateC).toISOString().slice(0,10))
    // console.log(new Date(this.data['event'].dateEnd).toISOString().slice(0,10))
    this.form = new FormGroup({
      titre: new FormControl(this.data['event'].titre, [Validators.required]),
      nbrPlaces: new FormControl(this.data['event'].nbrPlace, [Validators.required]),
      description: new FormControl(this.data['event'].description, [Validators.required]),
      dateDebut: new FormControl(new Date(this.data['event'].dateStart).toISOString().slice(0, 10), [Validators.required]),
      dateC: new FormControl(new Date(this.data['event'].dateC).toISOString().slice(0, 10), [Validators.required]),
      dateFin: new FormControl(new Date(this.data['event'].dateEnd).toISOString().slice(0, 10), [Validators.required])
    })
  }



  submit() {
    if (this.form.valid) {
      this.event.idE = this.data['event'].idE
      this.event.titre = this.form.value.titre
      this.event.nbrPlace = this.form.value.nbrPlaces
      this.event.description = this.form.value.description
      this.event.dateStart = this.form.value.dateDebut
      this.event.dateEnd = this.form.value.dateFin
      this.event.dateC = this.form.value.dateC
      //console.log(this.event);
      this.serv.updateEvent(this.event).subscribe(() => {
        this.thisDg.close();
        this.sb.open("Evenement Modifié", "Ok", {
          duration: 3000
        })
      })
    }
  }


}