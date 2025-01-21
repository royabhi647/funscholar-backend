import type { Schema, Struct } from '@strapi/strapi';

export interface NavbarMenus extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menus';
  info: {
    description: '';
    displayName: 'menus';
  };
  attributes: {
    menuName: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navbar.menus': NavbarMenus;
    }
  }
}
