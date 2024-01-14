// all-entreprise.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-all-entreprise',
  templateUrl: './all-entreprise.component.html',
  styleUrls: ['./all-entreprise.component.css']
})
export class AllEntrepriseComponent implements OnInit {

  entreprises: any[] | undefined;
  filteredEntreprises: any[] | undefined;
  searchTerm: string = '';

  constructor(private entrepriseService: EntrepriseService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.entrepriseService.getEntreprises().subscribe(data => {
      this.entreprises = data;
      this.filteredEntreprises = data; // Initialize filtered data with all data
    });
  }

  applyFilter(): void {
    if (this.entreprises && this.searchTerm.trim() !== '') {
      // Convert search term to a number
      const searchId = Number(this.searchTerm.trim());
  
      // Filter based on ID field
      this.filteredEntreprises = this.entreprises.filter(entreprise =>
        entreprise.id === searchId
      );
    } else {
      this.filteredEntreprises = this.entreprises; // Reset to all data if search term is empty
    }
  }
  deleteEntreprise(id: number): void {
    const confirmation = window.confirm('Are you sure you want to delete this entreprise?');

    if (confirmation) {
      this.entrepriseService.deleteEntreprise(id).subscribe(
        () => {
          alert('Entreprise deleted successfully.');
          // Optionally, update the list of enterprises after deletion.
          // You may want to call this.filteredEntreprises = this.filteredEntreprises.filter(...);
        },
        (error) => {
          alert('Error deleting entreprise:', );
        }
      );
    } else {
      alert('Deletion canceled.');
    }
  }
}

