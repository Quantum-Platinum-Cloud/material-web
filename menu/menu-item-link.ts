/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {styles as listItemStyles} from '../list/lib/listitem/list-item-styles.css.js';

import {styles} from './lib/menuitem/menu-item-styles.css.js';
import {MenuItemLink} from './lib/menuitemlink/menu-item-link.js';

export {ListItem} from '../list/lib/listitem/list-item.js';
export {CloseMenuEvent, DeactivateItemsEvent, MenuItem} from './lib/shared.js';


declare global {
  interface HTMLElementTagNameMap {
    'md-menu-item-link': MdMenuItemLink;
  }
}

/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * This is a linkable variant.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-menu-item-link')
export class MdMenuItemLink extends MenuItemLink {
  static override styles = [listItemStyles, styles];
}
