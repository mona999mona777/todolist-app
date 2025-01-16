import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavNodeComponent } from "../../components/nav-node/nav-node.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-node-blank',
  standalone: true,
  imports: [RouterOutlet, NavNodeComponent, FooterComponent],
  templateUrl: './node-blank.component.html',
  styleUrl: './node-blank.component.css'
})
export class NodeBlankComponent {

}
