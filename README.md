# Git-Viewer

This application is a github viewer, it helps to view github contributors, and can also sort contributors by pull requests or contributions. 

这个App提供了以 contributions 的数量或者 pull requests 的数量来展示 GitHub contributors 的功能

## How to user?

This application uses purely github APIs, so there is no backend code, and no web server required. 

* Clone the repo, then open `.html` with your prefered browser. 

这个App完全使用 GitHub APIs, 所以没有任何后端代码，可以直接使用浏览器打开 html 文件

## Search Page

![Search Page](screenshots/index.PNG)

Simply enter the git owner in the search bar. 

直接将想要搜索的内容写入 search bar, 进行搜索

## Repo Page

![Repo Page](screenshots/repo.PNG)

It shows a list of all repos by alphabetical order. And you can view contributors by clicking that repo.

以英文字母的顺序展示 repos

## User Page

User page displays contributors, order by the number of either contributions or pull requests. 

User Page 展示了 contributors, 可以选择以 contributions 数量，或者 pull requests 数量进行排序

* Order by contributions

![Order by pull requests](screenshots/sort_by_contributions.PNG)

* Order by pull requests

![Order by pull requests](screenshots/sort_by_pull_requests.PNG)