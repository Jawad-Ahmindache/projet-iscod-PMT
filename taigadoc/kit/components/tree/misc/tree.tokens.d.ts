import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { TuiTreeAccessor, TuiTreeItemContext, TuiTreeLoader } from './tree.interfaces';
/**
 * Controller for tracking value - TuiTreeItemComponent pairs
 */
export declare const TUI_TREE_ACCESSOR: import("@angular/core").InjectionToken<TuiTreeAccessor<unknown>>;
/**
 * Controller for expanding the tree
 */
export declare const TUI_TREE_CONTROLLER: import("@angular/core").InjectionToken<import("./tree.interfaces").TuiTreeController>;
/**
 * A node of a tree view
 */
export declare const TUI_TREE_NODE: import("@angular/core").InjectionToken<unknown>;
/**
 * A tree node placeholder for loading
 */
export declare const TUI_TREE_LOADING: import("@angular/core").InjectionToken<{}>;
/**
 * A tree node starting point
 */
export declare const TUI_TREE_START: import("@angular/core").InjectionToken<unknown>;
/**
 * A service to load tree progressively
 */
export declare const TUI_TREE_LOADER: import("@angular/core").InjectionToken<TuiTreeLoader<unknown>>;
/**
 * Content for a tree item
 */
export declare const TUI_TREE_CONTENT: import("@angular/core").InjectionToken<PolymorpheusContent<TuiTreeItemContext>>;
/**
 * Nesting level of current TreeView node
 */
export declare const TUI_TREE_LEVEL: import("@angular/core").InjectionToken<number>;
