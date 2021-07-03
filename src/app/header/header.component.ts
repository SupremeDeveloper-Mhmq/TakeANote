import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  constructor(private authService: AuthService) {}
  isAuthenticated = false;
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.Logout();
    Swal.fire('Logged Out', 'Logged out From account', 'success');
  }
}
