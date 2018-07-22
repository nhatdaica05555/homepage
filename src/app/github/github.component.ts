import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit   {

  infor : any[]


  private url = 'https://api.github.com/search/users?q='

  constructor (private http : Http){
    
  }

  ngOnInit(){
    this.http.get(this.url+'nhat').subscribe(response => {
      this.infor = response.json().items
      console.log(this.infor)
    })
  }

  search(key : HTMLInputElement){
  
    if (key.value.length == 0){
      return false
    }else{
      this.http.get(this.url+key.value).subscribe(response => {
        this.infor = response.json().items
        console.log(this.infor)
      })
    }
     
    }
  
  }

