describe('ghJob', function() {

  var mock = require('protractor-http-mock');

  beforeEach(function(){
    browser.get('/');
    mock([{
      request: {
        path: 'https://api.github.com/orgs/makersacademy/public_members',
        method: 'GET'
      },
      response: {
        data: mockData
      }
    }]);
  });

  it ('displays a list of users', function() {
    var x = $$('.users');
    console.log(x);
    var users = $$('#users p');
    expect(x.login).toEqual('bobby');
    expect(users.first().getText()).toEqual('paulalexrees');
    expect(users.last().getText()).toEqual('kevinpmcc');
  });

  it ('has a search field with a search button', function() {
    var field = element(by.id('searchfield'));
    var button = element(by.id('searchbutton'));
    expect(field.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });

  it ('displays an avatar for a user', function() {
    var images = $$('#users img');
    var firstUserAvatar = mockData[0].avatar_url;
    expect(images.first().getAttribute("src")).toEqual(firstUserAvatar);
  });

  it ('displays followers', function() {
    var followersNumber = element( by.repeater('user in ctrl.users').row(0).column('followers'));
    var firstUserFollowers = mockData[0].followers;
    expect(followersNumber.getText()).toEqual(firstUserFollowers.toString());
  });
  

  var mockData = [
    {
      "login": "paulalexrees",
      "id": 16372492,
      "avatar_url": "https://avatars.githubusercontent.com/u/16372492?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/paulalexrees",
      "html_url": "https://github.com/paulalexrees",
      "followers_url": "https://api.github.com/users/paulalexrees/followers",
      "following_url":
        "https://api.github.com/users/paulalexrees/following{/other_user}",
      "gists_url": "https://api.github.com/users/paulalexrees/gists{/gist_id}",
      "starred_url":
        "https://api.github.com/users/paulalexrees/starred{/owner}{/repo}",
      "subscriptions_url":
        "https://api.github.com/users/paulalexrees/subscriptions",
      "organizations_url": "https://api.github.com/users/paulalexrees/orgs",
      "repos_url": "https://api.github.com/users/paulalexrees/repos",
      "events_url": "https://api.github.com/users/paulalexrees/events{/privacy}",
      "received_events_url":
        "https://api.github.com/users/paulalexrees/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Paul Rees",
      "company": null,
      "blog": null,
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 27,
      "public_gists": 0,
      "followers": 3,
      "following": 1,
      "created_at": "2015-12-20T15:15:48Z",
      "updated_at": "2016-04-18T09:45:37Z"
    },
    {
      "login": "kevinpmcc",
      "id": 15851529,
      "avatar_url": "https://avatars.githubusercontent.com/u/15851529?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kevinpmcc",
      "html_url": "https://github.com/kevinpmcc",
      "followers_url": "https://api.github.com/users/kevinpmcc/followers",
      "following_url":
        "https://api.github.com/users/kevinpmcc/following{/other_user}",
      "gists_url": "https://api.github.com/users/kevinpmcc/gists{/gist_id}",
      "starred_url":
        "https://api.github.com/users/kevinpmcc/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kevinpmcc/subscriptions",
      "organizations_url": "https://api.github.com/users/kevinpmcc/orgs",
      "repos_url": "https://api.github.com/users/kevinpmcc/repos",
      "events_url": "https://api.github.com/users/kevinpmcc/events{/privacy}",
      "received_events_url":
        "https://api.github.com/users/kevinpmcc/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Kevin McCarthy",
      "company": null,
      "blog": null,
      "location": "London",
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 34,
      "public_gists": 0,
      "followers": 7,
      "following": 0,
      "created_at": "2015-11-14T22:56:08Z",
      "updated_at": "2016-03-26T13:00:18Z"
    }
  ];
});
