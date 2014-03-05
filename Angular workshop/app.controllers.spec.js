describe("mainController test", function() {

	var $scope, $rootScope, $controller, githubMock, mainCtrl;

	beforeEach(module("app.controllers"));
	beforeEach(inject(function($injector) {

		$rootScope = $injector.get('$rootScope');
		$scope = $rootScope.$new();
		$controller = $injector.get('$controller');

		githubMock = {
			get: function (param) {
				return {
					"total_count": 1057,
					"items": [
					{
						"id": 65646,
						"name": "mojo",
						"full_name": "kraih/mojo",
						"owner": {
							"login": "kraih",
							"id": 30094,
							"avatar_url": "https://gravatar.com/avatar/d9fae208c6398bc6172b97ad62427842?d=https%3A%2F%2Fidenticons.github.com%2F69908a3ae9144cf4918985a785114a46.png&r=x",
							"gravatar_id": "d9fae208c6398bc6172b97ad62427842",
							"url": "https://api.github.com/users/kraih",
							"html_url": "https://github.com/kraih",
							"followers_url": "https://api.github.com/users/kraih/followers",
							"following_url": "https://api.github.com/users/kraih/following{/other_user}",
							"gists_url": "https://api.github.com/users/kraih/gists{/gist_id}",
							"starred_url": "https://api.github.com/users/kraih/starred{/owner}{/repo}",
							"subscriptions_url": "https://api.github.com/users/kraih/subscriptions",
							"organizations_url": "https://api.github.com/users/kraih/orgs",
							"repos_url": "https://api.github.com/users/kraih/repos",
							"events_url": "https://api.github.com/users/kraih/events{/privacy}",
							"received_events_url": "https://api.github.com/users/kraih/received_events",
							"type": "User",
							"site_admin": false
						},
						"private": false,
						"html_url": "https://github.com/kraih/mojo",
						"description": "Mojolicious - Perl real-time web framework",
						"fork": false,
						"url": "https://api.github.com/repos/kraih/mojo",
						"forks_url": "https://api.github.com/repos/kraih/mojo/forks",
						"keys_url": "https://api.github.com/repos/kraih/mojo/keys{/key_id}",
						"collaborators_url": "https://api.github.com/repos/kraih/mojo/collaborators{/collaborator}",
						"teams_url": "https://api.github.com/repos/kraih/mojo/teams",
						"hooks_url": "https://api.github.com/repos/kraih/mojo/hooks",
						"issue_events_url": "https://api.github.com/repos/kraih/mojo/issues/events{/number}",
						"events_url": "https://api.github.com/repos/kraih/mojo/events",
						"assignees_url": "https://api.github.com/repos/kraih/mojo/assignees{/user}",
						"branches_url": "https://api.github.com/repos/kraih/mojo/branches{/branch}",
						"tags_url": "https://api.github.com/repos/kraih/mojo/tags",
						"blobs_url": "https://api.github.com/repos/kraih/mojo/git/blobs{/sha}",
						"git_tags_url": "https://api.github.com/repos/kraih/mojo/git/tags{/sha}",
						"git_refs_url": "https://api.github.com/repos/kraih/mojo/git/refs{/sha}",
						"trees_url": "https://api.github.com/repos/kraih/mojo/git/trees{/sha}",
						"statuses_url": "https://api.github.com/repos/kraih/mojo/statuses/{sha}",
						"languages_url": "https://api.github.com/repos/kraih/mojo/languages",
						"stargazers_url": "https://api.github.com/repos/kraih/mojo/stargazers",
						"contributors_url": "https://api.github.com/repos/kraih/mojo/contributors",
						"subscribers_url": "https://api.github.com/repos/kraih/mojo/subscribers",
						"subscription_url": "https://api.github.com/repos/kraih/mojo/subscription",
						"commits_url": "https://api.github.com/repos/kraih/mojo/commits{/sha}",
						"git_commits_url": "https://api.github.com/repos/kraih/mojo/git/commits{/sha}",
						"comments_url": "https://api.github.com/repos/kraih/mojo/comments{/number}",
						"issue_comment_url": "https://api.github.com/repos/kraih/mojo/issues/comments/{number}",
						"contents_url": "https://api.github.com/repos/kraih/mojo/contents/{+path}",
						"compare_url": "https://api.github.com/repos/kraih/mojo/compare/{base}...{head}",
						"merges_url": "https://api.github.com/repos/kraih/mojo/merges",
						"archive_url": "https://api.github.com/repos/kraih/mojo/{archive_format}{/ref}",
						"downloads_url": "https://api.github.com/repos/kraih/mojo/downloads",
						"issues_url": "https://api.github.com/repos/kraih/mojo/issues{/number}",
						"pulls_url": "https://api.github.com/repos/kraih/mojo/pulls{/number}",
						"milestones_url": "https://api.github.com/repos/kraih/mojo/milestones{/number}",
						"notifications_url": "https://api.github.com/repos/kraih/mojo/notifications{?since,all,participating}",
						"labels_url": "https://api.github.com/repos/kraih/mojo/labels{/name}",
						"releases_url": "https://api.github.com/repos/kraih/mojo/releases{/id}",
						"created_at": "2008-10-21T07:50:26Z",
						"updated_at": "2014-02-14T06:05:48Z",
						"pushed_at": "2014-02-14T06:05:48Z",
						"git_url": "git://github.com/kraih/mojo.git",
						"ssh_url": "git@github.com:kraih/mojo.git",
						"clone_url": "https://github.com/kraih/mojo.git",
						"svn_url": "https://github.com/kraih/mojo",
						"homepage": "http://mojolicio.us",
						"size": 40505,
						"stargazers_count": 1094,
						"watchers_count": 1094,
						"language": "Perl",
						"has_issues": true,
						"has_downloads": true,
						"has_wiki": true,
						"forks_count": 255,
						"mirror_url": null,
						"open_issues_count": 5,
						"forks": 255,
						"open_issues": 5,
						"watchers": 1094,
						"default_branch": "master",
						"master_branch": "master",
						"score": 188.99559
					},
					{
						"id": 91992,
						"name": "mojombo.github.io",
						"full_name": "mojombo/mojombo.github.io",
						"owner": {
							"login": "mojombo",
							"id": 1,
							"avatar_url": "https://gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https%3A%2F%2Fidenticons.github.com%2Fc4ca4238a0b923820dcc509a6f75849b.png&r=x",
							"gravatar_id": "25c7c18223fb42a4c6ae1c8db6f50f9b",
							"url": "https://api.github.com/users/mojombo",
							"html_url": "https://github.com/mojombo",
							"followers_url": "https://api.github.com/users/mojombo/followers",
							"following_url": "https://api.github.com/users/mojombo/following{/other_user}",
							"gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
							"starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
							"subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
							"organizations_url": "https://api.github.com/users/mojombo/orgs",
							"repos_url": "https://api.github.com/users/mojombo/repos",
							"events_url": "https://api.github.com/users/mojombo/events{/privacy}",
							"received_events_url": "https://api.github.com/users/mojombo/received_events",
							"type": "User",
							"site_admin": true
						},
						"private": false,
						"html_url": "https://github.com/mojombo/mojombo.github.io",
						"description": "Jekyll source for my personal blog.",
						"fork": false,
						"url": "https://api.github.com/repos/mojombo/mojombo.github.io",
						"forks_url": "https://api.github.com/repos/mojombo/mojombo.github.io/forks",
						"keys_url": "https://api.github.com/repos/mojombo/mojombo.github.io/keys{/key_id}",
						"collaborators_url": "https://api.github.com/repos/mojombo/mojombo.github.io/collaborators{/collaborator}",
						"teams_url": "https://api.github.com/repos/mojombo/mojombo.github.io/teams",
						"hooks_url": "https://api.github.com/repos/mojombo/mojombo.github.io/hooks",
						"issue_events_url": "https://api.github.com/repos/mojombo/mojombo.github.io/issues/events{/number}",
						"events_url": "https://api.github.com/repos/mojombo/mojombo.github.io/events",
						"assignees_url": "https://api.github.com/repos/mojombo/mojombo.github.io/assignees{/user}",
						"branches_url": "https://api.github.com/repos/mojombo/mojombo.github.io/branches{/branch}",
						"tags_url": "https://api.github.com/repos/mojombo/mojombo.github.io/tags",
						"blobs_url": "https://api.github.com/repos/mojombo/mojombo.github.io/git/blobs{/sha}",
						"git_tags_url": "https://api.github.com/repos/mojombo/mojombo.github.io/git/tags{/sha}",
						"git_refs_url": "https://api.github.com/repos/mojombo/mojombo.github.io/git/refs{/sha}",
						"trees_url": "https://api.github.com/repos/mojombo/mojombo.github.io/git/trees{/sha}",
						"statuses_url": "https://api.github.com/repos/mojombo/mojombo.github.io/statuses/{sha}",
						"languages_url": "https://api.github.com/repos/mojombo/mojombo.github.io/languages",
						"stargazers_url": "https://api.github.com/repos/mojombo/mojombo.github.io/stargazers",
						"contributors_url": "https://api.github.com/repos/mojombo/mojombo.github.io/contributors",
						"subscribers_url": "https://api.github.com/repos/mojombo/mojombo.github.io/subscribers",
						"subscription_url": "https://api.github.com/repos/mojombo/mojombo.github.io/subscription",
						"commits_url": "https://api.github.com/repos/mojombo/mojombo.github.io/commits{/sha}",
						"git_commits_url": "https://api.github.com/repos/mojombo/mojombo.github.io/git/commits{/sha}",
						"comments_url": "https://api.github.com/repos/mojombo/mojombo.github.io/comments{/number}",
						"issue_comment_url": "https://api.github.com/repos/mojombo/mojombo.github.io/issues/comments/{number}",
						"contents_url": "https://api.github.com/repos/mojombo/mojombo.github.io/contents/{+path}",
						"compare_url": "https://api.github.com/repos/mojombo/mojombo.github.io/compare/{base}...{head}",
						"merges_url": "https://api.github.com/repos/mojombo/mojombo.github.io/merges",
						"archive_url": "https://api.github.com/repos/mojombo/mojombo.github.io/{archive_format}{/ref}",
						"downloads_url": "https://api.github.com/repos/mojombo/mojombo.github.io/downloads",
						"issues_url": "https://api.github.com/repos/mojombo/mojombo.github.io/issues{/number}",
						"pulls_url": "https://api.github.com/repos/mojombo/mojombo.github.io/pulls{/number}",
						"milestones_url": "https://api.github.com/repos/mojombo/mojombo.github.io/milestones{/number}",
						"notifications_url": "https://api.github.com/repos/mojombo/mojombo.github.io/notifications{?since,all,participating}",
						"labels_url": "https://api.github.com/repos/mojombo/mojombo.github.io/labels{/name}",
						"releases_url": "https://api.github.com/repos/mojombo/mojombo.github.io/releases{/id}",
						"created_at": "2008-12-17T08:02:25Z",
						"updated_at": "2014-01-24T23:50:00Z",
						"pushed_at": "2014-01-24T23:50:00Z",
						"git_url": "git://github.com/mojombo/mojombo.github.io.git",
						"ssh_url": "git@github.com:mojombo/mojombo.github.io.git",
						"clone_url": "https://github.com/mojombo/mojombo.github.io.git",
						"svn_url": "https://github.com/mojombo/mojombo.github.io",
						"homepage": "http://tom.preston-werner.com",
						"size": 366,
						"stargazers_count": 524,
						"watchers_count": 524,
						"language": "CSS",
						"has_issues": true,
						"has_downloads": true,
						"has_wiki": true,
						"forks_count": 440,
						"mirror_url": null,
						"open_issues_count": 6,
						"forks": 440,
						"open_issues": 6,
						"watchers": 524,
						"default_branch": "master",
						"master_branch": "master",
						"score": 75.688835
					}
					]
				};
			}};

		mainCtrl = $controller("mainController", {$scope:$scope, github:githubMock});

	}));

	it("should return object", function () {
		$scope.search_query = 'mojo';
		spyOn($scope.github, 'get').andCallThrough();
		$scope.search();
		expect($scope.github.get).toHaveBeenCalled();
	});

});

describe("githubService test", function () {
	var $httpBackend, promise, github, response, query;

	beforeEach(module("app.services", "ngResource"));

	beforeEach(inject(function($injector) {
		github = $injector.get("github");
		$httpBackend = $injector.get("$httpBackend");
		query = "https://api.github.com/search/repositories?q=mojo";
		$httpBackend.whenGET(encodeURIComponent(query)).respond();

	}));

	describe('getGithub', function() {	
		it("returns a fucking object", inject(function() {

			promise = github.get(encodeURIComponent(query));
			$httpBackend.flush();
			$httpBackend.expectGET(encodeURIComponent(query));

		}));
	});

	afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
    });

});