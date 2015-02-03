# Hello Jekyll

Hello Jekyll is an un-styled and somewhat opinionated [Jekyll](http://jekyllrb.com) boilerplate that utilizes [LESS](http://lesscss.org/) as the CSS preprocessor and [Grunt](http://gruntjs.com/) as the task runner. 


## Usage

After cloning this repo, follow these steps:

1. Install Jekyll with `gem install jekyll`.
2. Install project dependencies with `npm install`.
3. Run Grunt with `grunt`.
4. Get to work!

- For a production ready build, run `grunt prod`.


## Config Options
Configuration options in `_config.yml` file:

    # General Settings
    markdown:               redcarpet
    pygments:               true

    # Post Settings
    permalink:              pretty
    paginate:               5
    excerpt_separator:      "<!-- more -->"

    # Things to include and ignore      
    include:                ['.htaccess']
    exclude:
    - ".editorconfig"
    - ".gitignore"
    - "bower.json"
    - "CNAME"
    - "composer.json"
    - "CONTRIBUTING.md"
    - "DOCS-LICENSE"
    - "Gruntfile.js"
    - "less"
    - "LICENSE"
    - "node_modules"
    - "package.json"
    - "README.md"
    - "sauce_browsers.yml"
    - "test-infra"
    - "Gemfile"
    - "Gemfile.lock"
    keep_files:             ['.git','.svn']


    # General Info
    title:                  "Hello Jekyll"
    tagline:                "An unstyled and somewhat opinionated Jekyll boilerplate that utilizes LESS and Grunt."
    description:            "An unstyled and somewhat opinionated <a href='http://jekyllrb.com' target='_blank'>Jekyll</a> boilerplate that utilizes LESS and Grunt. Made by <a href='https://twitter.com/itsmeara' target='_blank'>@itsMeAra</a>."
    baseurl:                /
    url:                    http://itsmeara.com

    author:
        name:               'Ara Abcarians'
        url:                https://itsmeara.com
        twitter:            itsmeara
        github:             itsmeara
        gplus:              '101183822199340201470'  


    # Analytics     
    analytics:
      google: 
        # eg. 'UA-123-12'
        site_id:               'UA-123-12'


    # Google Fonts
    # eg. 'Droid+Sans:400,700|Droid+Serif:400,700'
    google_font:          "Open+Sans:400,700"


    # Custom
    version:                1.0.0
    github:
      repo:                 https://github.com/itsmeara/hello-jekyll



## Author

**Ara Abcarians**
- <https://github.com/itsmeara>
- <https://twitter.com/itsmeara>


## Credits

Many tips and tricks have been learned and used from these great projects:

+ [tomblanchard.co.uk](https://github.com/tomblanchard/tomblanchard.co.uk) by [Tom Blanchard](http://twitter.com/tomblanchardcss)
+ [Hyde](https://github.com/mdo/hyde/) by [Mark Otto](http://twitter.com/mdo)
+ [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)


### Plugins

+ [reading_time](https://github.com/bdesham/reading_time)
