import routes from './routes';

export class SettingsIndex {
  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }
}

/*
if converter is only used by this view you can expose it this way.
The router.navigation is piped into here in the view
 */
export class CategoriesValueConverter {
  toView(navModels) {
    let categories = new Map(); // transforming array to mapped key by category. repeat.for syntax in view for repeating over maps.
    
    for(let model of navModels) {
      let routes = categories.get(model.settings.category);
      
      if (!routes) {
        categories.set(model.settings.category, routes = []);
      }
      
      routes.push(model);
    }
    
    return categories;
  }
}