import { Pipe, PipeTransform } from '@angular/core';
import { Reward } from './reward.interface';
import { CategoryFilter } from './category-filter.interface';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(categoryContentList: CategoryFilter[], args?: string) {
    console.log('[FILTER CATEGORY CLICKED]',categoryContentList);
    console.log('[FILTER CATEGORY NAME]',args);
    if(args == 'ALL'){
      return categoryContentList.filter(categoryContentList => categoryContentList.category == args);
    }
  }

}


//   transform(todos: Todo[], args?: string) {
//    console.log('[FILTER TODOS]',todos);
//    console.log('[FILTER TAB NAME]',args);
//     if(args=='Active'){
//         return todos.filter(todo => todo.completed !== true);
//       }else if(args=='Completed'){
//         return todos.filter(todo => todo.completed === true);
//       }else if (args=='All') {
//         return todos;
//       }
//   }
// }
