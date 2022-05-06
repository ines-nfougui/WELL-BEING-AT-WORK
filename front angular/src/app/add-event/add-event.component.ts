import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from 'src/service/products.service';
import { Event } from '../model/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
event : Event ;
  constructor(private serv:ProductsService,
    private router:Router , 
    private sb : MatSnackBar,
    private thisDialog : MatDialogRef<AddEventComponent>
    ) { }

  form : FormGroup;

  selectedFile! : File

  imagePreview : any;

  ngOnInit(): void {
    this.event = new Event
    this.form = new FormGroup({
      titre : new FormControl('',[Validators.required]),
      nbrPlaces : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),
      dateDebut : new FormControl('',[Validators.required]),
      dateC : new FormControl('',[Validators.required]),
      dateFin : new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required])
    })
  }

  onFileUpload(event) {
    console.log(event.target.files)
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  

  submit(){
    const fd = new FormData();
    if(this.form.valid){
      fd.append('image', this.selectedFile, this.selectedFile.name)
      fd.append('titre',this.form.value.titre)
      fd.append('nbPlace',this.form.value.nbrPlaces)
      fd.append('description',this.form.value.description)
      fd.append('dateStart',new Date(this.form.value.dateDebut).toDateString())
      fd.append('dateEnd',new Date(this.form.value.dateFin).toDateString())
      //console.log(fd.getAll.toString);
      this.serv.addEventWithImage(fd).subscribe(()=>{
         this.thisDialog.close();
         this.sb.open("Evenement Ajouté","Ok",{
           duration : 3000
         })
      })
    }else{
      console.log("NO")
      this.sb.open("Vous devez Remplir tous les Champs","Compirs",{
        duration : 3000
      })
    }
  }

}
