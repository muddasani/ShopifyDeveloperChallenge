# Shopify Developer Internship Challenge

This project was made for the Shopify Devloper Internship Challenge and was made using Node.js with Express and MongoDB. It fully meets the base requirements of the challenge plus I did some of the extras.
- Basically full CRUD support (see below)
- Added very basic API key security (I know how to further secure using jwt etc but it's 4AM and I need to study for a test tomorrow :/ but this quick and has some security)
- Deployed to a GKE cluster at http://35.232.145.58/ with load balancing and MongoDB support

I am also aware that this API does not scale because the products/orders/lineItems are related to the shop based off of the shop's name instead of id. I did this for the sake of time and simplicity so I don't have to keep copy and pasting ids which tends to get pretty tedious.

# Table of Contents
- Deployment (#deployment)
- Authorization (#authorization)

# Deployment
My Dockerfile and yamls are in the repo and here is proof of it running on GKE:
![screenshot from 2018-09-24 03-35-09](https://user-images.githubusercontent.com/29645585/45942033-ced3c580-bfae-11e8-9e0c-2b3fbde9e64a.png)


# API