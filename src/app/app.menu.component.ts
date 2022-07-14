import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>

            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Presentación',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },

            {
                label: 'Inferencia Estadística',
                items: [
                    {
                        label: 'Distribuciones Muestrales', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Introducción', icon: 'pi pi-fw pi-bookmark',routerLink: ['/dist-muestral'],
                                
                            },
                            {
                                label: 'La Media', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Población Infinita', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/poblacion-infinita']},
                                    {label: 'Población Finita', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/poblacion-finita']},
                                    {label: 'Diferencia de Medias', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/diferenciaMedias']},
                                ]
                            },
                            {
                                label: 'La Proporción', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Para una Proporción', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/una-proporcion']},
                                    {label: 'Diferencia de dos Proporciones', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/diferencia-proporciones']},
                                ]
                            },
                            {
                                label: 'La varianza', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Para una Varianza', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/una-varianza']},
                                    
                                ]
                            },
                            {
                                label: 'Desigualdad de Chebyshev', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dist-muestral/desigualdad-chebyshev'],
                            },
                            
                        ]
                    },
                ]
            },
            
            {
                label:'INFORMACIÓN',
                items:[
                    {
                        label: 'Páginas recomendadas', icon: 'pi pi-paperclip', routerLink: ['/paginas-recomendadas']
                    },
                    {
                        label: 'Sobre Nosotros', icon: 'pi pi-users', routerLink: ['/sobre-nosotros']
                    },
                    {
                        label: 'Repositorio', icon: 'pi pi-github', url: ['https://github.com/AmadoEudes/Inferencia-Estadistica']
                    },
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
