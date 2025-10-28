export const signalStoreCodeGeneration = {
  presentationName: 'signal-store',
  files: [
    // ========================================
    // CODE COMMUN - Partagé entre NgRx et Signal Stores
    // ========================================

    {
      name: 'storeModelTs',
      description: 'Modèle Store',
      path: 'src/app/presentations/signal-store/demo/common-code/models/store.model.ts'
    },
    {
      name: 'clientModelTs',
      description: 'Modèle Client',
      path: 'src/app/presentations/signal-store/demo/common-code/models/client.model.ts'
    },
    {
      name: 'cartModelTs',
      description: 'Modèle Cart',
      path: 'src/app/presentations/signal-store/demo/common-code/models/cart.model.ts'
    },
    {
      name: 'productModelTs',
      description: 'Modèle Product',
      path: 'src/app/presentations/signal-store/demo/common-code/models/product.model.ts'
    },
    {
      name: 'storesMockTs',
      description: 'Mock Stores',
      path: 'src/app/presentations/signal-store/demo/common-code/mocks/stores.mock.ts'
    },
    {
      name: 'clientsMockTs',
      description: 'Mock Clients',
      path: 'src/app/presentations/signal-store/demo/common-code/mocks/clients.mock.ts'
    },
    {
      name: 'cartsMockTs',
      description: 'Mock Carts',
      path: 'src/app/presentations/signal-store/demo/common-code/mocks/carts.mock.ts'
    },
    {
      name: 'productsMockTs',
      description: 'Mock Products',
      path: 'src/app/presentations/signal-store/demo/common-code/mocks/products.mock.ts'
    },
    {
      name: 'storeApiServiceTs',
      description: 'Service API Store',
      path: 'src/app/presentations/signal-store/demo/common-code/services/store-api.service.ts'
    },
    {
      name: 'clientApiServiceTs',
      description: 'Service API Client',
      path: 'src/app/presentations/signal-store/demo/common-code/services/client-api.service.ts'
    },
    {
      name: 'cartApiServiceTs',
      description: 'Service API Cart',
      path: 'src/app/presentations/signal-store/demo/common-code/services/cart-api.service.ts'
    },
    {
      name: 'productApiServiceTs',
      description: 'Service API Product',
      path: 'src/app/presentations/signal-store/demo/common-code/services/product-api.service.ts'
    },

    // ========================================
    // NGRX STORE - La complexité en action
    // ========================================

    // --- STORES ACTIONS ---
    {
      name: 'ngrxStoresActionsTs',
      description: 'NgRx Actions pour les magasins',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/stores.actions.ts'
    },
    {
      name: 'ngrxClientsActionsTs',
      description: 'NgRx Actions pour les clients',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/clients.actions.ts'
    },
    {
      name: 'ngrxCartsActionsTs',
      description: 'NgRx Actions pour les paniers',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/carts.actions.ts'
    },
    {
      name: 'ngrxProductsActionsTs',
      description: 'NgRx Actions pour les produits',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/products.actions.ts'
    },

    // --- REDUCERS ---
    {
      name: 'ngrxStoresReducerTs',
      description: 'NgRx Reducer pour les magasins',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/stores.reducer.ts'
    },
    {
      name: 'ngrxClientsReducerTs',
      description: 'NgRx Reducer pour les clients',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/clients.reducer.ts'
    },
    {
      name: 'ngrxCartsReducerTs',
      description: 'NgRx Reducer pour les paniers',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/carts.reducer.ts'
    },
    {
      name: 'ngrxProductsReducerTs',
      description: 'NgRx Reducer pour les produits',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/products.reducer.ts'
    },
    {
      name: 'ngrxReducersIndexTs',
      description: 'NgRx Reducers Index - Configuration globale',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/index.ts'
    },

    // --- EFFECTS ---
    {
      name: 'ngrxStoresEffectsTs',
      description: 'NgRx Effects pour les magasins',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/stores.effects.ts'
    },
    {
      name: 'ngrxClientsEffectsTs',
      description: 'NgRx Effects pour les clients',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/clients.effects.ts'
    },
    {
      name: 'ngrxCartsEffectsTs',
      description: 'NgRx Effects pour les paniers',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/carts.effects.ts'
    },
    {
      name: 'ngrxProductsEffectsTs',
      description: 'NgRx Effects pour les produits',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/products.effects.ts'
    },

    // --- SELECTORS ---
    {
      name: 'ngrxStoresSelectorsTs',
      description: 'NgRx Selectors pour les magasins',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/stores.selectors.ts'
    },
    {
      name: 'ngrxClientsSelectorsTs',
      description: 'NgRx Selectors pour les clients',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/clients.selectors.ts'
    },
    {
      name: 'ngrxCartsSelectorsTs',
      description: 'NgRx Selectors pour les paniers',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/carts.selectors.ts'
    },
    {
      name: 'ngrxProductsSelectorsTs',
      description: 'NgRx Selectors pour les produits',
      path: 'src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/products.selectors.ts'
    },

    // --- NGRX DEMO COMPONENT ---
    {
      name: 'ngrxDemoComponentTs',
      description: 'NgRx Demo Component - L\'enfer de l\'Observable',
      path: 'src/app/presentations/signal-store/demo/components/ngrx-demo/ngrx-demo.component.ts'
    },
    {
      name: 'ngrxDemoComponentHtml',
      description: 'NgRx Demo Template - AsyncPipe partout',
      path: 'src/app/presentations/signal-store/demo/components/ngrx-demo/ngrx-demo.component.html'
    },

    // ========================================
    // SIGNAL STORES - La simplicité
    // ========================================

    {
      name: 'storesStoreTs',
      description: 'StoresStore - Signal Store pour la gestion des magasins',
      path: 'src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/stores.store.ts'
    },
    {
      name: 'clientsStoreTs',
      description: 'ClientsStore - Signal Store pour la gestion des clients',
      path: 'src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/clients.store.ts'
    },
    {
      name: 'cartsStoreTs',
      description: 'CartsStore - Signal Store pour la gestion des paniers',
      path: 'src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/carts.store.ts'
    },
    {
      name: 'productsStoreTs',
      description: 'ProductsStore - Signal Store pour la gestion des produits',
      path: 'src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/products.store.ts'
    },

    // --- SIGNAL STORE DEMO COMPONENT ---
    {
      name: 'signalStoreDemoComponentTs',
      description: 'Signal Store Demo Component - Composition des 4 Signal Stores',
      path: 'src/app/presentations/signal-store/slides/17-demo-interactive/demo-interactive-content.component.ts'
    },
    {
      name: 'signalStoreDemoComponentHtml',
      description: 'Signal Store Demo Template - Pas d\'AsyncPipe !',
      path: 'src/app/presentations/signal-store/slides/17-demo-interactive/demo-interactive-content.component.html'
    }
  ]
};
