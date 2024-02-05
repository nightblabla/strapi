import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogInfoBlog extends Schema.Component {
  collectionName: 'components_blog_info_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    title: Attribute.String;
    blog_desc: Attribute.Blocks;
    blog_url: Attribute.String;
  };
}

export interface CommunityImageUrlCommunityImageUrl extends Schema.Component {
  collectionName: 'components_community_image_url_community_image_urls';
  info: {
    displayName: 'community_image_url';
  };
  attributes: {
    logo: Attribute.Media;
    url: Attribute.String;
  };
}

export interface CompanyInfoCompany extends Schema.Component {
  collectionName: 'components_company_info_companies';
  info: {
    displayName: 'company';
  };
  attributes: {
    logo: Attribute.Media;
    image: Attribute.Media;
    desc: Attribute.Blocks;
  };
}

export interface ContactInfoContactInformation extends Schema.Component {
  collectionName: 'components_contact_info_contact_informations';
  info: {
    displayName: 'contact_information';
  };
  attributes: {
    contacts: Attribute.String;
    contact_type: Attribute.String;
  };
}

export interface CultureInfoCultureComponent extends Schema.Component {
  collectionName: 'components_culture_info_culture_components';
  info: {
    displayName: 'Culture_component';
    description: '';
  };
  attributes: {
    employe_attribute: Attribute.Text;
    title_desc: Attribute.Component<'tittle-desc-row.tittle-desc-row', true>;
  };
}

export interface DescDesc extends Schema.Component {
  collectionName: 'components_desc_descs';
  info: {
    displayName: 'desc';
  };
  attributes: {
    descripton: Attribute.Blocks;
  };
}

export interface JobInfoOppenings extends Schema.Component {
  collectionName: 'components_job_info_oppenings';
  info: {
    displayName: 'oppenings';
  };
  attributes: {
    job_name: Attribute.String;
    desc: Attribute.Blocks;
    job_image: Attribute.Media;
  };
}

export interface MetologyInfoMetology extends Schema.Component {
  collectionName: 'components_metology_info_metologies';
  info: {
    displayName: 'metology';
  };
  attributes: {
    tittle: Attribute.String;
    lists: Attribute.Blocks;
    logo: Attribute.Media;
  };
}

export interface NewsNews extends Schema.Component {
  collectionName: 'components_news_news';
  info: {
    displayName: 'news';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blog_post: Attribute.Blocks;
    tumbnail: Attribute.Media;
    images: Attribute.Media;
    publish_date: Attribute.Date;
  };
}

export interface RasturantInfoOpeningHours extends Schema.Component {
  collectionName: 'components_rasturant_info_opening_hours';
  info: {
    displayName: 'Opening hours';
  };
  attributes: {
    hours: Attribute.String;
    date: Attribute.String;
  };
}

export interface TextdateInfoHistoryText extends Schema.Component {
  collectionName: 'components_textdate_info_history_texts';
  info: {
    displayName: 'history_text';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Blocks;
    date: Attribute.Date;
  };
}

export interface TittleDescRowTittleDescRow extends Schema.Component {
  collectionName: 'components_tittle_desc_row_tittle_desc_rows';
  info: {
    displayName: 'tittle_desc_row';
  };
  attributes: {
    tittle: Attribute.String;
    desc: Attribute.Blocks;
    background_image: Attribute.Media;
  };
}

export interface TittleDescRowValues extends Schema.Component {
  collectionName: 'components_tittle_desc_row_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    images: Attribute.Media;
    desc: Attribute.Component<'desc.desc', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-info.blog': BlogInfoBlog;
      'community-image-url.community-image-url': CommunityImageUrlCommunityImageUrl;
      'company-info.company': CompanyInfoCompany;
      'contact-info.contact-information': ContactInfoContactInformation;
      'culture-info.culture-component': CultureInfoCultureComponent;
      'desc.desc': DescDesc;
      'job-info.oppenings': JobInfoOppenings;
      'metology-info.metology': MetologyInfoMetology;
      'news.news': NewsNews;
      'rasturant-info.opening-hours': RasturantInfoOpeningHours;
      'textdate-info.history-text': TextdateInfoHistoryText;
      'tittle-desc-row.tittle-desc-row': TittleDescRowTittleDescRow;
      'tittle-desc-row.values': TittleDescRowValues;
    }
  }
}
