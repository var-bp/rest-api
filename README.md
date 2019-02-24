# Folder Structure
• controllers: This folder contains the code for our controllers. It also
has an index.js file to handle exporting the contents of the required
controller files. There is also a base controller here, which contains
all the generic methods that all controllers should have; so every new
controller can extend this and inherit said methods.

• lib: This folder contains the miscellaneous code not big enough to
have its own folder but required across several different places in our
project; for instance, database access, helper functions, and so forth.

• models: Inside this folder are the model files. Normally when working
with Mongoose, a model’s file has the schema definition, and you
return the instantiation of that schema as your model. In our case,
the actual definition is somewhere else, so this code handles loading
that external definition, adding the extra behavior specific to each
model, and then returning it.

• request_schemas: Inside this folder are the JSON Schemas used to
validate the different requests.

• schemas: These are the JSON Schemas of the models, used for the
Swagger module to define the UI for testing and for the Mongoose
model’s definition. We will have to add some code to translate from
the first one to the latter, since they don’t use the same format.

• swagger-ui: This folder contains the contents of the Swagger UI
project. We’ll need to do some minor adjustments to the index.html
file to make it work as we expect it.

• node_modules: This folder will be created automatically by npm, and
it’ll contain the modules listed on you package.json file. You don’t
really have to worry about maintaining (or even creating) this folder,
it’ll appear there once you run npm install for the first time.

• config: The config folder is used by the config module, which will
look inside it by default. Your configuration should be inside a JSON
file called default.json. Any environment-specific configuration
will be added by creating configuration files aptly named (such
as production.json, or development.json, which you can later
reference using the NODE_ENV environment variable1).

# Codes
• 1xx: Informational and only defined under HTTP 1.1.

• 2xx: The request went OK, here’s your content.

• 3xx: The resource was moved somehow to somewhere.

• 4xx: The source of the request did something wrong.

• 5xx: The server crashed due to some error in its code.

# HTTP Verbs and Their Proposed Actions

| HTTP Verb   | Proposed Action |
| ----------- | --------------- |
| GET         | Access a resource in a read-only mode |
| POST        | Normally used to send a new resource into the server (create action) |
| PUT         | Normally used to update a given resource (update action) |
| DELETE      | Used to delete a resource |
| HEAD        | Not part of the CRUD actions, but the verb is used to ask if a given resource exists without returning any of its representations |
| OPTIONS     | Not part of the CRUD actions, but used to retrieve a list of available verbs on a given resource (i.e. What can the client do with a specific resource?) |
