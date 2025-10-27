You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Presentation System

### Directory Structure
- Presentation: `src/app/presentations/<name>/<name>.presentation.{ts,html,scss}`
- Slides: `src/app/presentations/<name>/slides/<slide-name>.slide.{ts,html,scss}`
- Demos: `src/app/presentations/<name>/demo/<demo-name>.component.{ts,html,scss}`

### Slide Files Pattern
**TS**: Component with `ChangeDetectionStrategy.OnPush`, imports `[Highlight]`, uses `signal()` for code content
**HTML**: `<h1>` OUTSIDE `.slide-container` (above white card), content inside `.slide-container`
**SCSS**: Keep EMPTY or minimal - global styles in `src/styles.scss` under `app-<presentation-name>-presentation` selector

### Critical HTML Structure
```html
<h1>Title</h1>  <!-- MUST be outside, displays white on dark background -->
<div class="slide-container">  <!-- White card with content -->
  <p class="subtitle">Optional</p>
  <div class="two-columns"> or <div class="three-columns">
    <div class="code-section">
      <h2>Title</h2>
      <pre><code [highlight]="code()" language="typescript"></code></pre>
    </div>
  </div>
  <div class="benefits-list"><div class="benefit-item">✅ Text</div></div>
  <div class="problems-list"><div class="problem-item">❌ Text</div></div>
</div>
```

### Global Style Pattern (src/styles.scss)
```scss
app-<presentation-name>-presentation {
  swiper-slide {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 1.5rem; padding: 2rem;
  }
  h1 { font-size: 3rem; margin: 0; font-weight: 700; letter-spacing: -0.02em; color: #ffffff; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); }
  .slide-container {
    max-height: calc(100vh - 10rem); max-width: 90vw; width: 100%;
    display: flex; flex-direction: column; padding: 3rem 4rem; overflow: auto;
    background: #ffffff; border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  }
  // Rest of utility classes...
}
```

### Routing Pattern
**app.routes.ts**: Add `{ path: '<name>', loadComponent: () => import('./presentations/<name>/<name>.presentation').then(m => m.<Name>Presentation) }`
**presentation.ts**: Must import slides, provide via `SWIPER_SLIDES_TOKEN`, imports `[SwiperComponent, SwiperSlideDirective]`

### Code Generation
Add `// @generate-code:start <ClassName> <path>` above signal, `// @generate-code:end` after, run `npm run generate:code`

### Demo Component Pattern
- Separate form classes (e.g., `contact-form.ts`, `situation-form.ts`) extending `FormGroup`
- Enums for field names (`enum ContactFormFields { FIRST_NAME = 'firstName' }`)
- Enums for values (`enum Gender { MALE = 'male' }`)
- Options arrays with `{ label, value }` structure
- Main component uses forms, exports to parent slide

### Available Utility Classes
`.two-columns` `.three-columns` `.code-section` `.benefit-item` `.problem-item` `.warning-box` `.subtitle` `.benefits-list` `.problems-list`

### Critical Rules
- H1 ALWAYS outside `.slide-container`
- NO slide-specific SCSS unless absolutely required (delete file if empty)
- Use `signal()` for all code content in slides
- Keep slide TS minimal - only for code display
- All forms must use enums for fields and values
- Demo components in `demo/` directory only
