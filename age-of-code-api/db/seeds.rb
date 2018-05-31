# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "Default", experience: 0, permissions:"11110000000")
git_push = Action.create(name: "Git Push", value: 15, cooldown:5000, target: "You", price: 0)
add_stylesheet = Action.create(name: "Add Stylesheet", value: 20, cooldown:30000, target: "You", price: 0)
read_stack_overflow = Action.create(name: "Read Stack Overflow", value: 10, cooldown:10000, target: "You", price: 0)
write_code = Action.create(name: "Write Code", value: 1, cooldown:1000, target: "You", price: 0)
build_function = Action.create(name: "Build Function", value: 5, cooldown:3000, target: "You", price: 100)
build_api = Action.create(name: "Build API", value: 60, cooldown: 50000, target: "You", price: 600)
recursion = Action.create(name: "Build Recursion", value: 20, cooldown: 15000, target: "You", price: 400)
build_loop = Action.create(name: "Build For Loop", value: 10, cooldown: 7000, target: "You", price: 200)
hire_intern = Action.create(name: "Hire Intern", value: 15, cooldown: 7000, target: "You", price: 1000)
refactor = Action.create(name: "Refactor Code", value: 5, cooldown: 2000, target: "You", price: 300)
touch_typing = Action.create(name: "Touch Typing", value: 2, cooldown: 1500, target: "You", price: 20)


UserAction.create(user_id: user.id, action_id: git_push.id)
UserAction.create(user_id: user.id, action_id: write_code.id)
