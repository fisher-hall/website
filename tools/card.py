#! /bin/env python3

# generate the html for site cards from user input
# doing it by hand is a pain

"""
Relevant HTML looks like this:

<div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="media/headshots/johnnycarr.jpg" alt="Card image cap" height="275">
    <div class="card-body">
        <h5 class="card-title">Fred Fisher</h5>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Fisher Founder</li>
            <li class="list-group-item">Major: Sainthood</li>
            <li class="list-group-item">Hometown: Notre Dame, IN</li>
            <li class="list-group-item">Hobbies/Interests: building Fisher Hall with my bare hands</li>
        </ul>
    </div>
</div>

"""

def main():
    
    attributes = {
        "file" : "",
        "name" : "",
        "title" : "",
        "major" : "",
        "town" : "",
        "hobby" : "",
    }

    for key in attributes.keys():
        attributes[key] = input("Value for {}: ".format(key))

    output = """
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="{}" alt="Card image cap" height="275">
        <div class="card-body">
            <h5 class="card-title">{}</h5>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{}</li>
                <li class="list-group-item">Major: {}</li>
                <li class="list-group-item">Hometown: {}</li>
                <li class="list-group-item">Hobbies/Interests: {}</li>
            </ul>
        </div>
    </div>
    """.format(attributes['file'], attributes['name'], attributes['title'], attributes['major'], attributes['town'], attributes['hobby'])

    print(output)

if __name__ == "__main__":
    main()