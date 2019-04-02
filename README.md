# ![LOGO](logo.png) GitHub MSP Connector

## Description

A generated MSP connector for the GitHub API (version v3).

Generated from: https://api.apis.guru/v2/specs/github.com/v3/swagger.json<br/>
Generated at: 2019-04-02T13:24:16+03:00

## API Description

Powerful collaboration, code review, and code management for open source and private projects.


## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all the emojis available to use on GitHub.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List public events.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List Feeds.
GitHub provides several timeline resources in Atom format. The Feeds API
 lists all the feeds available to the authenticating user.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List the authenticated user's gists or if called anonymously, this will
return all public gists.


#### Input Parameters
* `since` - _optional_ - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
Only gists updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### Create a gist.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List all public gists.

#### Input Parameters
* `since` - _optional_ - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
Only gists updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### List the authenticated user's starred gists.

#### Input Parameters
* `since` - _optional_ - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
Only gists updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### Delete a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments on a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a commen

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a comment.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single comment.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a comment.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Fork a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Unstar a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if a gist is starred.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Star a gist.

#### Input Parameters
* `id` - _required_ - Id of gist.
* `Accept` - _optional_ - Is used to set specified media type.

### Listing available templates.
List all templates available to pass as an option when creating a repository.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single template.

#### Input Parameters
* `language` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### List issues.
List all issues across all the authenticated user's visible repositories.


#### Input Parameters
* `filter` - _required_ - Issues assigned to you / created by you / mentioning you / you're
subscribed to updates for / All issues the authenticated user can see

    Possible values: assigned, created, mentioned, subscribed, all.
* `state` - _required_
    Possible values: open, closed.
* `labels` - _required_ - String list of comma separated Label names. Example - bug,ui,@high.
* `sort` - _required_
    Possible values: created, updated, comments.
* `direction` - _required_
    Possible values: asc, desc.
* `since` - _optional_ - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Only issues updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### Find issues by state and keyword.

#### Input Parameters
* `keyword` - _required_ - The search term.
* `state` - _required_ - Indicates the state of the issues to return. Can be either open or closed.
    Possible values: open, closed.
* `owner` - _required_
* `repository` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.

#### Input Parameters
* `keyword` - _required_ - The search term
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `language` - _optional_ - Filter results by language
* `start_page` - _optional_ - The page number to fetch
* `sort` - _optional_ - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
    Possible values: updated, stars, forks.
* `Accept` - _optional_ - Is used to set specified media type.

### This API call is added for compatibility reasons only.

#### Input Parameters
* `email` - _required_ - The email address
* `Accept` - _optional_ - Is used to set specified media type.

### Find users by keyword.

#### Input Parameters
* `keyword` - _required_ - The search term
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `start_page` - _optional_ - The page number to fetch
* `sort` - _optional_ - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
    Possible values: updated, stars, forks.
* `Accept` - _optional_ - Is used to set specified media type.

### Render an arbitrary Markdown document

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Render a Markdown document in raw mode

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### This gives some information about GitHub.com, the service.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List public events for a network of repositories.

#### Input Parameters
* `owner` - _required_ - Name of the owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List your notifications.
List all notifications for the current user, grouped by repository.


#### Input Parameters
* `all` - _optional_ - True to show notifications marked as read.
* `participating` - _optional_ - True to show only notifications in which the user is directly participating
or mentioned.

* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### Mark as read.
Marking a notification as "read" removes it from the default view on GitHub.com.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### View a single thread.

#### Input Parameters
* `id` - _required_ - Id of thread.
* `Accept` - _optional_ - Is used to set specified media type.

### Mark a thread as read

#### Input Parameters
* `id` - _required_ - Id of thread.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a Thread Subscription.

#### Input Parameters
* `id` - _required_ - Id of thread.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Thread Subscription.

#### Input Parameters
* `id` - _required_ - Id of thread.
* `Accept` - _optional_ - Is used to set specified media type.

### Set a Thread Subscription.
This lets you subscribe to a thread, or ignore it. Subscribing to a thread
is unnecessary if the user is already subscribed to the repository. Ignoring
a thread will mute all future notifications (until you comment or get @mentioned).


#### Input Parameters
* `id` - _required_ - Id of thread.
* `Accept` - _optional_ - Is used to set specified media type.

### Get an Organization.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit an Organization.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### List public events for an organization.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### List issues.
List all issues for a given organization for the authenticated user.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `filter` - _required_ - Issues assigned to you / created by you / mentioning you / you're
subscribed to updates for / All issues the authenticated user can see

    Possible values: assigned, created, mentioned, subscribed, all.
* `state` - _required_
    Possible values: open, closed.
* `labels` - _required_ - String list of comma separated Label names. Example - bug,ui,@high.
* `sort` - _required_
    Possible values: created, updated, comments.
* `direction` - _required_
    Possible values: asc, desc.
* `since` - _optional_ - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Only issues updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### Members list.
List all users who are members of an organization. A member is a user tha
belongs to at least 1 team in the organization. If the authenticated user
is also an owner of this organization then both concealed and public members
will be returned. If the requester is not an owner of the organization the
query will be redirected to the public members list.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### Remove a member.
Removing a user from this list will remove them from all teams and they
will no longer have any access to the organization's repositories.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `username` - _required_ - Name of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if a user is, publicly or privately, a member of the organization.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `username` - _required_ - Name of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Public members list.
Members of an organization can choose to have their membership publicized
or not.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### Conceal a user's membership.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `username` - _required_ - Name of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Check public membership.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `username` - _required_ - Name of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Publicize a user's membership.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `username` - _required_ - Name of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories for the specified org.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `type` - _optional_
    Possible values: all, public, private, forks, sources, member.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a new repository for the authenticated user. OAuth users must supply
repo scope.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### List teams.

#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### Create team.
In order to create a team, the authenticated user must be an owner of organization.


#### Input Parameters
* `org` - _required_ - Name of organisation.
* `Accept` - _optional_ - Is used to set specified media type.

### Get your current rate limit status
Note: Accessing this endpoint does not count against your rate limit.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a Repository.
Deleting a repository requires admin access. If OAuth is used, the delete_repo
scope is required.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List assignees.
This call lists all the available assignees (owner + collaborators) to which
issues may be assigned.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Check assignee.
You may also check to see if a particular user is an assignee for a repository.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `assignee` - _required_ - Login of the assignee.
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of branches

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get Branch

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `branch` - _required_ - Name of the branch.
* `Accept` - _optional_ - Is used to set specified media type.

### List.
When authenticating as an organization owner of an organization-owned
repository, all organization owners are included in the list of
collaborators. Otherwise, only users with access to the repository are
returned in the collaborators list.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Remove collaborator.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `user` - _required_ - Login of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if user is a collaborator

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `user` - _required_ - Login of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### Add collaborator.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `user` - _required_ - Login of the user.
* `Accept` - _optional_ - Is used to set specified media type.

### List commit comments for a repository.
Comments are ordered by ascending ID.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a commit comment

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single commit comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Update a commit comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### List commits on a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `sha` - _optional_ - Sha or branch to start listing commits from.
* `path` - _optional_ - Only commits containing this file path will be returned.
* `author` - _optional_ - GitHub login, name, or email by which to filter by commit author.
* `until` - _optional_ - ISO 8601 Date - Only commits before this date will be returned.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the combined Status for a specific Ref
The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
application/vnd.github.she-hulk-preview+json


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single commit.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - SHA-1 code of the commit.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments for a single commitList comments for a single commit.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - SHA-1 code of the commit.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a commit comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - SHA-1 code of the commit.
* `Accept` - _optional_ - Is used to set specified media type.

### Compare two commits

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `baseId` - _required_
* `headId` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a file.
This method deletes a file in a repository.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `path` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get contents.
This method returns the contents of a file or directory in a repository.
Files and symlinks support a custom media type for getting the raw content.
Directories and submodules do not support custom media types.
Note: This API supports files up to 1 megabyte in size.
Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `path` - _required_
* `path` - _optional_ - The content path.
* `ref` - _optional_ - The String name of the Commit/Branch/Tag. Defaults to 'master'.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a file.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `path` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of contributors.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `anon` - _required_ - Set to 1 or true to include anonymous contributors in results.
* `Accept` - _optional_ - Is used to set specified media type.

### Users with pull access can view deployments for a repository

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Users with push access can create a deployment for a given ref

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Users with pull access can view deployment statuses for a deployment

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_ - The Deployment ID to list the statuses from.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Deployment Status
Users with push access can create deployment statuses for a given deployment:


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_ - The Deployment ID to list the statuses from.
* `Accept` - _optional_ - Is used to set specified media type.

### Deprecated. List downloads for a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Deprecated. Delete a download.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `downloadId` - _required_ - Id of download.
* `Accept` - _optional_ - Is used to set specified media type.

### Deprecated. Get a single download.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `downloadId` - _required_ - Id of download.
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of repository events.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List forks.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `sort` - _optional_
    Possible values: newes, oldes, watchers.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a fork.
Forking a Repository happens asynchronously. Therefore, you may have to wai
a short period before accessing the git objects. If this takes longer than 5
minutes, be sure to contact Support.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Blob.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Blob.
Since blobs can be any arbitrary binary data, the input and responses for
the blob API takes an encoding parameter that can be either utf-8 or
base64. If your data cannot be losslessly sent as a UTF-8 string, you can
base64 encode it.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - SHA-1 code.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Commit.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Commit.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - SHA-1 code.
* `Accept` - _optional_ - Is used to set specified media type.

### Get all References

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Reference

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a Reference
Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Reference

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Update a Reference

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Tag Object.
Note that creating a tag object does not create the reference that makes a
tag in Git. If you want to create an annotated tag in Git, you have to do
this call to create the tag object, and then create the refs/tags/[tag]
reference. If you want to create a lightweight tag, you only have to create
the tag reference - this call would be unnecessary.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Tag.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Create a Tree.
The tree creation API will take nested entries as well. If both a tree and
a nested path modifying that tree are specified, it will overwrite the
contents of that tree with the new path contents and write a new tree out.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Tree.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `shaCode` - _required_ - Tree SHA.
* `recursive` - _optional_ - Get a Tree Recursively. (0 or 1)
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of hooks.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a hook.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a hook.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `hookId` - _required_ - Id of hook.
* `Accept` - _optional_ - Is used to set specified media type.

### Get single hook.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `hookId` - _required_ - Id of hook.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a hook.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `hookId` - _required_ - Id of hook.
* `Accept` - _optional_ - Is used to set specified media type.

### Test a push hook.
This will trigger the hook with the latest push to the current repository
if the hook is subscribed to push events. If the hook is not subscribed
to push events, the server will respond with 204 but no test POST will
be generated.
Note: Previously /repos/:owner/:repo/hooks/:id/tes


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `hookId` - _required_ - Id of hook.
* `Accept` - _optional_ - Is used to set specified media type.

### List issues for a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `filter` - _required_ - Issues assigned to you / created by you / mentioning you / you're
subscribed to updates for / All issues the authenticated user can see

    Possible values: assigned, created, mentioned, subscribed, all.
* `state` - _required_
    Possible values: open, closed.
* `labels` - _required_ - String list of comma separated Label names. Example - bug,ui,@high.
* `sort` - _required_
    Possible values: created, updated, comments.
* `direction` - _required_
    Possible values: asc, desc.
* `since` - _optional_ - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Only issues updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### Create an issue.
Any user with pull access to a repository can create an issue.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments in a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `direction` - _optional_ - Ignored without 'sort' parameter.
* `sort` - _optional_
    Possible values: created, updated.
* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### Delete a comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - ID of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - ID of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - ID of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### List issue events for a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single event.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `eventId` - _required_ - Id of the event.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single issue

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit an issue.
Issue owners and users with push access can edit an issue.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments on an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### List events for an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Remove all labels from an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### List labels on an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Add labels to an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Replace all labels for an issue.
Sending an empty array ([]) will remove all Labels from the Issue.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `Accept` - _optional_ - Is used to set specified media type.

### Remove a label from an issue.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of issue.
* `name` - _required_ - Name of the label.
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of keys.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a key.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a key.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `keyId` - _required_ - Id of key.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a key

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `keyId` - _required_ - Id of key.
* `Accept` - _optional_ - Is used to set specified media type.

### List all labels for this repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a label.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a label.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `name` - _required_ - Name of the label.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single label.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `name` - _required_ - Name of the label.
* `Accept` - _optional_ - Is used to set specified media type.

### Update a label.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `name` - _required_ - Name of the label.
* `Accept` - _optional_ - Is used to set specified media type.

### List languages.
List languages for the specified repository. The value on the right of a
language is the number of bytes of code written in that language.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Perform a merge.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List milestones for a repository.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `state` - _optional_ - String to filter by state.
    Possible values: open, closed.
* `direction` - _optional_ - Ignored without 'sort' parameter.
* `sort` - _optional_
    Possible values: due_date, completeness.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a milestone.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a milestone.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of milestone.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single milestone.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of milestone.
* `Accept` - _optional_ - Is used to set specified media type.

### Update a milestone.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of milestone.
* `Accept` - _optional_ - Is used to set specified media type.

### Get labels for every issue in a milestone.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Number of milestone.
* `Accept` - _optional_ - Is used to set specified media type.

### List your notifications in a repository
List all notifications for the current user.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `all` - _optional_ - True to show notifications marked as read.
* `participating` - _optional_ - True to show only notifications in which the user is directly participating
or mentioned.

* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### Mark notifications as read in a repository.
Marking all notifications in a repository as "read" removes them from the
default view on GitHub.com.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List pull requests.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `state` - _optional_ - String to filter by state.
    Possible values: open, closed.
* `head` - _optional_ - Filter pulls by head user and branch name in the format of 'user:ref-name'.
Example: github:new-script-format.

* `base` - _optional_ - Filter pulls by base branch name. Example - gh-pages.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a pull request.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments in a repository.
By default, Review Comments are ordered by ascending ID.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `direction` - _optional_ - Ignored without 'sort' parameter.
* `sort` - _optional_
    Possible values: created, updated.
* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### Delete a comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a comment.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `commentId` - _required_ - Id of comment.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single pull request.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### Update a pull request.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### List comments on a pull request.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a comment.
  #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )
  description: |
    Alternative Input.
    Instead of passing commit_id, path, and position you can reply to an
    existing Pull Request Comment like this:

        body
           Required string
        in_reply_to
           Required number - Comment id to reply to.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### List commits on a pull request.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### List pull requests files.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### Get if a pull request has been merged.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### Merge a pull request (Merge Button's)

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `number` - _required_ - Id of pull.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the README.
This method returns the preferred README for a repository.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _optional_ - The String name of the Commit/Branch/Tag. Defaults to master.
* `Accept` - _optional_ - Is used to set specified media type.

### Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a release
Users with push access to the repository can create a release.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a release asset

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single release asset

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Edit a release asset
Users with push access to the repository can edit a release asset.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Users with push access to the repository can delete a release.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single release

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### Users with push access to the repository can edit a release

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### List assets for a release

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `id` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### List Stargazers.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the number of additions and deletions per week.
Returns a weekly aggregate of the number of additions and deletions pushed
to a repository.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the last year of commit activity data.
Returns the last year of commit activity grouped by week. The days array
is a group of commits per day, starting on Sunday.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get contributors list with additions, deletions, and commit counts.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the weekly commit count for the repo owner and everyone else.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the number of commits per hour in each day.
Each array contains the day number, hour number, and number of commits
0-6 Sunday - Saturday
0-23 Hour of day
Number of commits

For example, [2, 14, 25] indicates that there were 25 total commits, during
the 2.00pm hour on Tuesdays. All times are based on the time zone of
individual commits.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List Statuses for a specific Ref.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_ - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.

* `Accept` - _optional_ - Is used to set specified media type.

### Create a Status.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `ref` - _required_ - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.

* `Accept` - _optional_ - Is used to set specified media type.

### List watchers.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a Repository Subscription.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a Repository Subscription.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Set a Repository Subscription

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of tags.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get list of teams

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List Stargazers. New implementation.

#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get archive link.
This method will return a 302 to a URL to download a tarball or zipball
archive for a repository. Please make sure your HTTP framework is
configured to follow redirects or you will need to use the Location header
to make a second GET request.
Note: For private repositories, these links are temporary and expire quickly.


#### Input Parameters
* `owner` - _required_ - Name of repository owner.
* `repo` - _required_ - Name of repository.
* `archive_format` - _required_
    Possible values: tarball, zipball.
* `path` - _required_ - Valid Git reference, defaults to 'master'.
* `Accept` - _optional_ - Is used to set specified media type.

### List all public repositories.
This provides a dump of every public repository, in the order that they
were created.
Note: Pagination is powered exclusively by the since parameter. is the
Link header to get the URL for the next page of repositories.


#### Input Parameters
* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### Search code.

#### Input Parameters
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `q` - _required_ - The search terms. This can be any combination of the supported code
search parameters:
'Search In' Qualifies which fields are searched. With this qualifier
you can restrict the search to just the file contents, the file path,
or both.
'Languages' Searches code based on the language it's written in.
'Forks' Filters repositories based on the number of forks, and/or
whether code from forked repositories should be included in the results
at all.
'Size' Finds files that match a certain size (in bytes).
'Path' Specifies the path that the resulting file must be at.
'Extension' Matches files with a certain extension.
'Users' or 'Repositories' Limits searches to a specific user or repository.

* `sort` - _optional_ - Can only be 'indexed', which indicates how recently a file has been indexed
by the GitHub search infrastructure. If not provided, results are sorted
by best match.

    Possible values: indexed.
* `Accept` - _optional_ - Is used to set specified media type.

### Find issues by state and keyword. (This method returns up to 100 results per page.)

#### Input Parameters
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `q` - _required_ - The q search term can also contain any combination of the supported issue search qualifiers:
* `sort` - _optional_ - The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
    Possible values: updated, created, comments.
* `Accept` - _optional_ - Is used to set specified media type.

### Search repositories.

#### Input Parameters
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `q` - _required_ - The search terms. This can be any combination of the supported repository
search parameters:
'Search In' Qualifies which fields are searched. With this qualifier you
can restrict the search to just the repository name, description, readme,
or any combination of these.
'Size' Finds repositories that match a certain size (in kilobytes).
'Forks' Filters repositories based on the number of forks, and/or whether
forked repositories should be included in the results at all.
'Created' and 'Last Updated' Filters repositories based on times of
creation, or when they were last updated.
'Users or Repositories' Limits searches to a specific user or repository.
'Languages' Searches repositories based on the language they are written in.
'Stars' Searches repositories based on the number of stars.

* `sort` - _optional_ - If not provided, results are sorted by best match.
    Possible values: stars, forks, updated.
* `Accept` - _optional_ - Is used to set specified media type.

### Search users.

#### Input Parameters
* `order` - _optional_ - The sort field. if sort param is provided. Can be either asc or desc.
    Possible values: desc, asc.
* `q` - _required_ - The search terms. This can be any combination of the supported user
search parameters:
'Search In' Qualifies which fields are searched. With this qualifier you
can restrict the search to just the username, public email, full name,
location, or any combination of these.
'Repository count' Filters users based on the number of repositories they
have.
'Location' Filter users by the location indicated in their profile.
'Language' Search for users that have repositories that match a certain
language.
'Created' Filter users based on when they joined.
'Followers' Filter users based on the number of followers they have.

* `sort` - _optional_ - If not provided, results are sorted by best match.
    Possible values: followers, repositories, joined.
* `Accept` - _optional_ - Is used to set specified media type.

### Delete team.
In order to delete a team, the authenticated user must be an owner of the
org that the team is associated with.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `Accept` - _optional_ - Is used to set specified media type.

### Get team.

#### Input Parameters
* `teamId` - _required_ - Id of team.
* `Accept` - _optional_ - Is used to set specified media type.

### Edit team.
In order to edit a team, the authenticated user must be an owner of the org
that the team is associated with.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `Accept` - _optional_ - Is used to set specified media type.

### List team members.
In order to list members in a team, the authenticated user must be a member
of the team.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `Accept` - _optional_ - Is used to set specified media type.

### The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.

Remove team member.
In order to remove a user from a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.
NOTE This does not delete the user, it just remove them from the team.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.

Get team member.
In order to get if a user is a member of a team, the authenticated user mus
be a member of the team.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.

Add team member.
In order to add a user to a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### Remove team membership.
In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### Get team membership.
In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### Add team membership.
In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.

If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.

If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.


#### Input Parameters
* `teamId` - _required_ - Id of team.
* `username` - _required_ - Name of a member.
* `Accept` - _optional_ - Is used to set specified media type.

### List team repos

#### Input Parameters
* `teamId` - _required_ - Id of team.
* `Accept` - _optional_ - Is used to set specified media type.

### In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.

#### Input Parameters
* `teamId` - _required_ - Id of team.
* `owner` - _required_ - Name of a repository owner.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if a team manages a repository

#### Input Parameters
* `teamId` - _required_ - Id of team.
* `owner` - _required_ - Name of a repository owner.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.

#### Input Parameters
* `teamId` - _required_ - Id of team.
* `owner` - _required_ - Name of a organization.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Get the authenticated user.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Update the authenticated user.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Delete email address(es).
You can include a single email address or an array of addresses.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List email addresses for a user.
In the final version of the API, this method will return an array of hashes
with extended information for each email address indicating if the address
has been verified and if it's primary email address for GitHub.
Until API v3 is finalized, use the application/vnd.github.v3 media type to
get other response format.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Add email address(es).
You can post a single email address or an array of addresses.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List the authenticated user's followers

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List who the authenticated user is following.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Unfollow a user.
Unfollowing a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.


#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if you are following a user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### Follow a user.
Following a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.


#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List issues.
List all issues across owned and member repositories for the authenticated
user.


#### Input Parameters
* `filter` - _required_ - Issues assigned to you / created by you / mentioning you / you're
subscribed to updates for / All issues the authenticated user can see

    Possible values: assigned, created, mentioned, subscribed, all.
* `state` - _required_
    Possible values: open, closed.
* `labels` - _required_ - String list of comma separated Label names. Example - bug,ui,@high.
* `sort` - _required_
    Possible values: created, updated, comments.
* `direction` - _required_
    Possible values: asc, desc.
* `since` - _optional_ - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Only issues updated at or after this time are returned.

* `Accept` - _optional_ - Is used to set specified media type.

### List your public keys.
Lists the current user's keys. Management of public keys via the API requires
that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Create a public key.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.

#### Input Parameters
* `keyId` - _required_ - ID of key.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single public key.

#### Input Parameters
* `keyId` - _required_ - ID of key.
* `Accept` - _optional_ - Is used to set specified media type.

### List public and private organizations for the authenticated user.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories for the authenticated user. Note that this does not include
repositories owned by organizations which the user can access. You can lis
user organizations and list organization repositories separately.


#### Input Parameters
* `type` - _optional_
    Possible values: all, public, private, forks, sources, member.
* `Accept` - _optional_ - Is used to set specified media type.

### Create a new repository for the authenticated user. OAuth users must supply
repo scope.


#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories being starred by the authenticated user.

#### Input Parameters
* `direction` - _optional_ - Ignored without 'sort' parameter.
* `sort` - _optional_
    Possible values: created, updated.
* `Accept` - _optional_ - Is used to set specified media type.

### Unstar a repository

#### Input Parameters
* `owner` - _required_ - Name of a repository owner.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if you are starring a repository.

#### Input Parameters
* `owner` - _required_ - Name of a repository owner.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Star a repository.

#### Input Parameters
* `owner` - _required_ - Name of a repository owner.
* `repo` - _required_ - Name of a repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories being watched by the authenticated user.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Stop watching a repository

#### Input Parameters
* `owner` - _required_ - Name of the owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if you are watching a repository.

#### Input Parameters
* `owner` - _required_ - Name of the owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### Watch a repository.

#### Input Parameters
* `owner` - _required_ - Name of the owner.
* `repo` - _required_ - Name of repository.
* `Accept` - _optional_ - Is used to set specified media type.

### List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.

#### Input Parameters
* `Accept` - _optional_ - Is used to set specified media type.

### Get all users.
This provides a dump of every user, in the order that they signed up for GitHub.
Note: Pagination is powered exclusively by the since parameter. Use the Link
header to get the URL for the next page of users.


#### Input Parameters
* `since` - _optional_ - The integer ID of the last user that you've seen.
* `Accept` - _optional_ - Is used to set specified media type.

### Get a single user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### This is the user's organization dashboard. You must be authenticated as the user to view this.

#### Input Parameters
* `username` - _required_ - Name of user.
* `org` - _required_
* `Accept` - _optional_ - Is used to set specified media type.

### List a user's followers

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### Check if one user follows another.

#### Input Parameters
* `username` - _required_ - Name of user.
* `targetUser` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List a users gists.

#### Input Parameters
* `username` - _required_ - Name of user.
* `since` - _optional_ - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Example: "2012-10-09T23:39:01Z".

* `Accept` - _optional_ - Is used to set specified media type.

### List public keys for a user.
Lists the verified public keys for a user. This is accessible by anyone.


#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List all public organizations for a user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### These are events that you'll only see public events.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List public events that a user has received

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List public repositories for the specified user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `type` - _optional_
    Possible values: all, public, private, forks, sources, member.
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories being starred by a user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

### List repositories being watched by a user.

#### Input Parameters
* `username` - _required_ - Name of user.
* `Accept` - _optional_ - Is used to set specified media type.

## License

flowground :- Telekom iPaaS / github-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
