declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"about": {
"about.md": {
  id: "about.md",
  slug: "about",
  body: string,
  collection: "about",
  data: any
},
},
"beyond": {
"assesment.md": {
  id: "assesment.md",
  slug: "assesment",
  body: string,
  collection: "beyond",
  data: InferEntrySchema<"beyond">
},
"cv.md": {
  id: "cv.md",
  slug: "cv",
  body: string,
  collection: "beyond",
  data: InferEntrySchema<"beyond">
},
"cvchecki.md": {
  id: "cvchecki.md",
  slug: "cvchecki",
  body: string,
  collection: "beyond",
  data: InferEntrySchema<"beyond">
},
},
"blog": {
"complete-guide-fullstack-development.md": {
  id: "complete-guide-fullstack-development.md",
  slug: "complete-guide-fullstack-development",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"essential-data-structures-algorithms.md": {
  id: "essential-data-structures-algorithms.md",
  slug: "essential-data-structures-algorithms",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-become-frontend-master.md": {
  id: "how-to-become-frontend-master.md",
  slug: "how-to-become-frontend-master",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"kitchensink.mdx": {
  id: "kitchensink.mdx",
  slug: "kitchensink",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"courses": {
"Communicationskills.md": {
  id: "Communicationskills.md",
  slug: "communicationskills",
  body: string,
  collection: "courses",
  data: InferEntrySchema<"courses">
},
"comprehensive.md": {
  id: "comprehensive.md",
  slug: "comprehensive",
  body: string,
  collection: "courses",
  data: InferEntrySchema<"courses">
},
"crash.md": {
  id: "crash.md",
  slug: "crash",
  body: string,
  collection: "courses",
  data: InferEntrySchema<"courses">
},
},
"services": {
"branding.md": {
  id: "branding.md",
  slug: "branding",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
"ecommerce.md": {
  id: "ecommerce.md",
  slug: "ecommerce",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
"mobileapps.md": {
  id: "mobileapps.md",
  slug: "mobileapps",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
"support.md": {
  id: "support.md",
  slug: "support",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
"webapps.md": {
  id: "webapps.md",
  slug: "webapps",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
"webdesign.md": {
  id: "webdesign.md",
  slug: "webdesign",
  body: string,
  collection: "services",
  data: InferEntrySchema<"services">
},
},
"team": {
"abas.md": {
  id: "abas.md",
  slug: "abas",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"ahsan.md": {
  id: "ahsan.md",
  slug: "ahsan",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"sara.md": {
  id: "sara.md",
  slug: "sara",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
