/**
 * Configuration for code generation in signal presentation
 */
export const signalCodeGeneration = {
  presentationName: 'signal',
  files: [
    {
      name: 'contactsResourceDemoComponentTs',
      path: 'src/app/presentations/signal/demo/contacts-resource-demo.component.ts',
      description: 'Code TypeScript de la démo httpResource'
    },
    {
      name: 'contactsResourceDemoComponentHtml',
      path: 'src/app/presentations/signal/demo/contacts-resource-demo.component.html',
      description: 'Template HTML de la démo httpResource'
    },
    {
      name: 'contactsResourceDemoComponentScss',
      path: 'src/app/presentations/signal/demo/contacts-resource-demo.component.scss',
      description: 'Styles SCSS de la démo httpResource'
    },
    {
      name: 'contactsJson',
      path: 'public/contacts.json',
      description: 'Données JSON des contacts'
    }
  ]
};
