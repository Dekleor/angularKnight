import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {Character} from '../../models/character';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user: User;
  character: Character;

  constructor(private http: AdminService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deleteUser() {
    return this.http.deleteUser(this.user.id).subscribe(s => this.router.navigateByUrl('/admin'));
  }

  deleteCharacter() {
    return this.http.deleteCharacter(this.character.id).subscribe(s => this.router.navigateByUrl('/admin'));
  }

  ngOnInit(): void {
  }

}
