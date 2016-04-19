/**
 * Created by gal on 29.01.16.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {RootComponent} from './root.component'
import {ROUTER_PROVIDERS} from "angular2/router";

import {enableProdMode} from "angular2/core";
enableProdMode();

bootstrap (RootComponent,[ROUTER_PROVIDERS]);