import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {SharedCodeDialogComponent} from '../../demo/components/shared-code-dialog/shared-code-dialog.component';
import {NgrxCodeDialogComponent} from '../../demo/components/ngrx-code-dialog/ngrx-code-dialog.component';
import {SignalstoreCodeDialogComponent} from '../../demo/components/signalstore-code-dialog/signalstore-code-dialog.component';
import * as GeneratedCode from '../../generated-code.constants';

@Component({
  selector: 'app-code-demo-slide',
  templateUrl: './code-demo.slide.html',
  styleUrl: './code-demo.slide.scss',
  imports: [ButtonDirective],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDemoSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  openSharedCode() {
    this.ref = this.dialogService.open(SharedCodeDialogComponent, {
      data: {
        // Models
        storeModel: GeneratedCode.storeModelTs,
        clientModel: GeneratedCode.clientModelTs,
        cartModel: GeneratedCode.cartModelTs,
        productModel: GeneratedCode.productModelTs,
        // Mocks
        storesMock: GeneratedCode.storesMockTs,
        clientsMock: GeneratedCode.clientsMockTs,
        cartsMock: GeneratedCode.cartsMockTs,
        productsMock: GeneratedCode.productsMockTs,
        // Services
        storeApiService: GeneratedCode.storeApiServiceTs,
        clientApiService: GeneratedCode.clientApiServiceTs,
        cartApiService: GeneratedCode.cartApiServiceTs,
        productApiService: GeneratedCode.productApiServiceTs
      },
      width: '90vw',
      height: '90vh',
      modal: true,
      dismissableMask: true,
      styleClass: 'code-dialog'
    });
  }

  openNgrxCode() {
    this.ref = this.dialogService.open(NgrxCodeDialogComponent, {
      data: {
        // Actions
        storesActions: GeneratedCode.ngrxStoresActionsTs,
        clientsActions: GeneratedCode.ngrxClientsActionsTs,
        cartsActions: GeneratedCode.ngrxCartsActionsTs,
        productsActions: GeneratedCode.ngrxProductsActionsTs,
        // Reducers
        storesReducer: GeneratedCode.ngrxStoresReducerTs,
        clientsReducer: GeneratedCode.ngrxClientsReducerTs,
        cartsReducer: GeneratedCode.ngrxCartsReducerTs,
        productsReducer: GeneratedCode.ngrxProductsReducerTs,
        reducersIndex: GeneratedCode.ngrxReducersIndexTs,
        // Effects
        storesEffects: GeneratedCode.ngrxStoresEffectsTs,
        clientsEffects: GeneratedCode.ngrxClientsEffectsTs,
        cartsEffects: GeneratedCode.ngrxCartsEffectsTs,
        productsEffects: GeneratedCode.ngrxProductsEffectsTs,
        // Selectors
        storesSelectors: GeneratedCode.ngrxStoresSelectorsTs,
        clientsSelectors: GeneratedCode.ngrxClientsSelectorsTs,
        cartsSelectors: GeneratedCode.ngrxCartsSelectorsTs,
        productsSelectors: GeneratedCode.ngrxProductsSelectorsTs,
        // Component
        ngrxComponent: GeneratedCode.ngrxDemoComponentTs,
        ngrxComponentHtml: GeneratedCode.ngrxDemoComponentHtml
      },
      width: '90vw',
      height: '90vh',
      modal: true,
      dismissableMask: true,
      styleClass: 'code-dialog'
    });
  }

  openSignalStoreCode() {
    this.ref = this.dialogService.open(SignalstoreCodeDialogComponent, {
      data: {
        storesStore: GeneratedCode.storesStoreTs,
        clientsStore: GeneratedCode.clientsStoreTs,
        cartsStore: GeneratedCode.cartsStoreTs,
        productsStore: GeneratedCode.productsStoreTs,
        signalStoreComponent: GeneratedCode.signalStoreDemoComponentTs,
        signalStoreComponentHtml: GeneratedCode.signalStoreDemoComponentHtml
      },
      width: '90vw',
      height: '90vh',
      modal: true,
      dismissableMask: true,
      styleClass: 'code-dialog'
    });
  }

}
