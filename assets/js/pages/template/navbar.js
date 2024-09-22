export async function navbar(json) {
    var template = json.template
    delete json.template
    
    var buttons = []

    for (var name in json) {
        buttons.push(template.replace("{name}", name).replace("{icon}", json[name].icon).replace("{link}", json[name].link))
    }
    return buttons
}