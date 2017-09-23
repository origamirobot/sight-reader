import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FretBoardComponent } from './fret-board/fret-board.component';
import { UkuleleComponent } from './ukulele/ukulele.component';

@NgModule({
	declarations: [
		AppComponent,
		FretBoardComponent,
		UkuleleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
