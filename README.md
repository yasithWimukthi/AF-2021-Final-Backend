# AF-2021-Final-Backend

You have been asked to develop a web application for a Hotel. After the discussions
with related parties, the product team has come up with the following noticeable
points.
1. The system is built mainly around categories and rooms. Categories and
rooms share a many-to-many relationship. See the example below.
  - a. Rooms- RM102, RM203
  - b. Categories- Sporty, Romantic, Nature, Rustic
 2. A web interface is required to display all categories and rooms belongs to a
  category. You can come up with your own design.
  
3. 3rd party vendors are interested in accessing following data.
  - a. Get all categories.
  - b. Get all rooms.
  - c. Add new room.
  - d. Get rooms in each category.
All the above services and not CPU heavy (please consider this when you are
selecting the technology).

4. Another special service is required to calculate the total amount of given set
of rooms. This is calculated by adding all rooms amount together. This service
is expanding and will be a CPU heavy task, please consider this when you are
selecting the technology.
Note the following points as well.

1. RESTful services are required for the following.
  - a. Get all categories.
  - b. Get all rooms.
  - c. Get rooms by category.
d. Add new room- Pass all the categories that a room belongs to as a list
of IDs.
Ex: 
```
{
code: “RM102”,
amount: 40000,
wing: “west”,
pax: 3
categories: [Category ID]
}
```
e. Get rooms in each category.
2. Room and Category data structure should be flexible. Please note the below
example data structures.
a. Room
  - i. Code- RM102
  - ii. Amount- 40000
  - iii. Wing- Possible values (west, east, north, south)
  - iv. Pax- Possible values (2,3.4)
  
b. Category

  - i. Name- Rustic
  - ii. Description- Rustic experience
