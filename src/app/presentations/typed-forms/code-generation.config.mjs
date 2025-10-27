/**
 * Configuration for code generation in typed-forms presentation
 */
export const typedFormsCodeGeneration = {
  presentationName: 'typed-forms',
  files: [
    {
      name: 'registrationFormEnums',
      path: 'src/app/presentations/typed-forms/models/registration-form.enums.ts',
      description: 'Enums pour le formulaire d\'inscription'
    },
    {
      name: 'registrationFormOptions',
      path: 'src/app/presentations/typed-forms/models/registration-form.options.ts',
      description: 'Options pour les selects du formulaire'
    },
    {
      name: 'contactFormTs',
      path: 'src/app/presentations/typed-forms/models/contact-form.ts',
      description: 'Classe ContactForm'
    },
    {
      name: 'situationFormTs',
      path: 'src/app/presentations/typed-forms/models/situation-form.ts',
      description: 'Classe SituationForm'
    },
    {
      name: 'registrationFormTs',
      path: 'src/app/presentations/typed-forms/models/registration-form.ts',
      description: 'Classe RegistrationForm'
    },
    {
      name: 'registrationDemoComponentTs',
      path: 'src/app/presentations/typed-forms/components/registration-demo/registration-demo.component.ts',
      description: 'Composant de démo RegistrationDemo'
    },
    {
      name: 'registrationDemoComponentHtml',
      path: 'src/app/presentations/typed-forms/components/registration-demo/registration-demo.component.html',
      description: 'Template du composant RegistrationDemo'
    },
    {
      name: 'registrationDemoComponentScss',
      path: 'src/app/presentations/typed-forms/components/registration-demo/registration-demo.component.scss',
      description: 'Styles du composant RegistrationDemo'
    }
  ]
};
