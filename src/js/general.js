import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Tabs from "%modules%/tabs/tabs"
import {$$} from "./util";
import $ from "jquery";
global.jQuery = $;

require ("@fancyapps/fancybox/dist/jquery.fancybox");

Turbolinks.start();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

const tabs = $$(`[data-tabs]`);
console.log(tabs)


tabs.map((item) => new Tabs(item));
$('[data-fancybox]').fancybox({
  protect: true
});
