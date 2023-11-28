import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  data: any[] = [];
  filteredData: any[] = [];
  filterData = '';
  pageSize = 4;
  currentPage = 1;
  totalItems = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe((data: any) => {
      this.totalItems = data.searchRetrieveResponse.numberOfRecords;
      this.data = data.searchRetrieveResponse.records;
      this.updateFilteredData();
    });
  }

  updateFilteredData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredData = this.data.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateFilteredData();
  }

  onRecordClick(_t11: any) {
    throw new Error('Method not implemented.');
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
}
