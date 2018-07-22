import { JsonholderService } from './../services/jsonholder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsonholder',
  templateUrl: './jsonholder.component.html',
  styleUrls: ['./jsonholder.component.css']
})
export class JsonholderComponent implements OnInit {

  posts : any[]

  constructor(private service :  JsonholderService) { 

  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json()
    })
  }

  createPost(input : HTMLInputElement){
    let post = {
      title : input.value
    }
    input.value = ''
    this.service.createPost(input.value).subscribe( response => {
      post['id'] = response.json().id
      this.posts.splice(0,0,post)
    })
  }
  
  deletePosts(post){
    this.service.deletePosts(post.id).subscribe(response => {
     let index = this.posts.indexOf(post)
     this.posts.splice(index,1)
    } )
  }





}
