import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
          {
              "title": "Github Portfolio",
              "rel_sitelink": "",
              "sitelink": "https://github.com/chrispaynes",
              "cubeid": "33",
              "img": false,
              "challenge": "",
              "solution": ""
          },
          {
            "title": "Ruby Pupil",
            "rel_sitelink": "",
            "sitelink": "http://www.rubypupil.com",
            "cubeid": "12",
            "img": "rubysite.png",
            "challenge": "Ruby Pupil was my first foray into creating an online web portfolio and personal branding site. It needed to deliver a fully responsive, mobile-friendly and intuitive user-interface to feature images and captions of my graphic design and web development creations and blog. All of this needed to be saturated with ample white space and minimal distractions to allow the portfolio pieces and blog content to be the focus.",
            "solution": "I created responsive and reusable page templates using flexbox, CSS viewport units and minimal amount of media breakpoints. I achieved minimal user navigation and page load times by creating a single page application built upon DRY Coding, DOM Manipulation and fast routing. To ensure fast page load times I used the client-side Ember JS Framework to separate and structure model data, CSS data, view data and routing functionality into modular pieces. Organizing an efficient repeatable workflow, catenation and compression was done with the help of Gulp JS."
        }, {
            "title": "Sapphire Stone",
            "rel_sitelink": "/sapphire",
            "sitelink": "www.rubypupil.com/sapphire",
            "cubeid": "14",
            "img": "sapphiresite.png",
            "challenge": "To create an evolving magazine-inspired showcase of my favorite vacation photography and memories. This site should be easy to navigate, calming (like a vacation) and based around the color sapphire. Each photograph needed to be organized within a category named after its respective city and be search-able by that criteria. Visitors need to be able to rate photos on a scale of 1 to 10 stars add add comments. Each city or state should have it's own template page and should have a large photo broadcast at the top. This also served as an opportunity to further experiment with Angular JS, Bootstrap and SASS.",
            "solution": ""
        }, {
            "title": "Urban Emerald",
            "rel_sitelink": "/urban",
            "sitelink": "www.rubypupil.com/urban",
            "cubeid": "13",
            "img": "urbansite.png",
            "challenge": "Urban Emerald was created to be an artistic article based site that highlights the visual and architectural \"gems\" found within urban landscapes. ",
            "solution": "To play off of the unorthodox architectural charms found within urban cores, this site needed to visually and stylistically \"go out on a limb\" and focus on page layouts that aren't found on most websites. Urban Emerald features many photos and short descriptions for those photos. This also served as an opportunity to further experiment with Backbone JS, jQuery, a search feature."
        }];
    }
});
