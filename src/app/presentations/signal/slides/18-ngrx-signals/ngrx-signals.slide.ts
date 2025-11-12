import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-ngrx-signals-slide',
  templateUrl: './ngrx-signals.slide.html',
  styleUrl: './ngrx-signals.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxSignalsSlide {
  storeCode = signal(`import { signalStore, withState, withComputed, withMethods } from '@ngrx/signals';
import { computed } from '@angular/core';

interface TodosState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState<TodosState>({
    todos: [],
    filter: 'all'
  }),
  withComputed(({ todos, filter }) => ({
    filteredTodos: computed(() => {
      const allTodos = todos();
      const currentFilter = filter();
      if (currentFilter === 'active') {
        return allTodos.filter(t => !t.completed);
      }
      if (currentFilter === 'completed') {
        return allTodos.filter(t => t.completed);
      }
      return allTodos;
    })
  })),
  withMethods((store) => ({
    addTodo(text: string) {
      patchState(store, {
        todos: [...store.todos(), { id: Date.now(), text, completed: false }]
      });
    },
    toggleTodo(id: number) {
      patchState(store, {
        todos: store.todos().map(t =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      });
    }
  }))
);`);

  usageCode = signal(`@Component({...})
export class TodosComponent {
  store = inject(TodosStore);

  // Accès direct aux signals
  todos = this.store.filteredTodos;
  filter = this.store.filter;

  // Template
  // @for (todo of todos(); track todo.id) { ... }

  addTodo(text: string) {
    this.store.addTodo(text);
  }

  toggleTodo(id: number) {
    this.store.toggleTodo(id);
  }
}`);
}
