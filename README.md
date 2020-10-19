Welcome to the Landlord App.

Here, one can create and delete landlords. You can keep a track of specific landlords attributes like name,age,state,city,number of houses owned,etc.

To get started:

1. bundle install once inside the backend api
2. rails db:migrate
3. rails db:seed
4. rails s and goto localhost://3001
5. One can go to rails c to create their own objects by User.create(:name=> "abc", :age=>"123",etc).
6. For future versions, there are 3 models created in backend; User, House, tenant
7. User has many Houses, Houses has many tenant, A house belongs to a User and a tenant belongs to a house and User has many tenants through houses.
8. To start the front-end, got the landlords-app-frontend, and yarn start
9. Goto localhost://3000 and start creating/deleting landlord objects
10. Have fun!


License:
This project is licensed under the MIT License
