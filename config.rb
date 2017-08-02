require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "css/sass"
images_dir = "img"
javascripts_dir = "js"

output_style = :compressed # :expanded or :nested or :compact or :compressed
environment = :development
 
line_comments = true
sass_options = {:sourcemap => true}
cache = true
color_output = false # required for mixture
 
# SASS core
# -----------------------------------------------------------------------------
 
Sass::Script::Number.precision = 7 # chrome needs a precision of 7 to round properly