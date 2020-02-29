Using Bootstrap, handlebars, google auth



User stories
    I am an organizer that wants to set up a sports league and need a place to have people register and teams can be sorted
        
                    

    I am an athlete looking to register for a sports league and need a place to join a team and get information
       * add email address to schema *
       * null column for team assignment, input from organizer *
    


ORGANIZER HOMEPAGE
Create new league
    creating a league will be adding a new table-
            all information would be on a single form
                league name
                organizer name
                organizer contact information
                county/location - use dropdown for (census api)
                sport
                league params ---- this information shows on card that participants see when choosing league ---
                            *card also displays league name and organizer name*
                    age group
                    sport
                    gender (use check boxes)
                    schedule/location


Manage leagues
    Current leagues (cards)
        view participants
        create/assign/edit teams
        send notice/contact participants - group
        send notice/contact single participant
        * Update League page *
        



PARTICIPANT HOMEPAGE
    Find a league ---- Uses our database as the API
        Drop downs for state to county to sport to league
            After location is selected leagues are populated as cards
                league name
                organizer name
                league params from above
                    After league is selected add participant information (for parent registering for child etc)
                        Form is populated
                            athlete info (name, contact, etc)
                            


Current leagues/My teams
    shows cards from league search
        card has league name and athlete name(s)
            card takes to league home page
                Displays schedule, location, organizer contact




-----Pages----- 
1. Landing page - Nick
2. Account creation - displays form for either organizer or participate
3. Organizer portal - 
    Create a league route
    Current leagues route
4. Participant portal - Tucker
    Search for leagues route
    Current leagues route
5. League Search - Nick

