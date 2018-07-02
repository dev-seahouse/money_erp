import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from './_services/script-loader.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        LayoutModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
    ],
    providers: [ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
