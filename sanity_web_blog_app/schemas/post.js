export default {
  name: 'post',
	title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'pablisher_date',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
      group: 'content',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'attribution',
          title: 'Attribution',
          type: 'string',
        }
      ],    
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
      group: 'content',
    },
    {
      name: 'body',
      title: 'Body content',
      type: 'array',
      validation: Rule => Rule.required(),
      group: 'content',
      of: [
        {
          type: 'image',
        },
        {
          type: 'block',
        },
      ]
    },
  ]
}