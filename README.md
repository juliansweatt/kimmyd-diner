# Kimmy D's Diner Website

Website for [Kimmy D's Diner](http://kimmyds.com) in Clearwater, FL. 

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Build with the `ng build --base-href ./ --prod` command for deployment. The build artifacts will be stored in the `dist/` directory. 

## Deployment

The built version will not be accessible locally due to local download restrictions. The site must be deployed to a static host. Try [Google Cloud Platform](https://cloud.google.com/storage/docs/hosting-static-website), [Google Firebase](https://firebase.google.com/docs/hosting), or [Amazon Web Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).


## Adding New Components
### Code Scaffolding 

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Add New Images to the Gallery

Add image files to the `assets/gallery` directory and add the file name to the `assetIndex.json` list to add gallery photos.
