import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from '../../../../../..';

import { PopoverLongListPage } from './popover-long-list-page';

@NgModule({
  declarations: [
    PopoverLongListPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverLongListPage)
  ],
  entryComponents: [
    PopoverLongListPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverLongListPageModule {}