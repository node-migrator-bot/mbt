#
# Renders and caches given template for given data.
#
#  @param name - template name
#  @param data - data to render
#
{%= js_safe_name %}.render = (name, data) ->
  JST["app/templates/#{name}.html.tmpl"](data)
