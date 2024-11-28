---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "{{ replace .Name "-" " " | title }}"
meta_title: "{{ replace .Name "-" " " | title }} ｜ HaleyCH's Blog"
description: ""
date: {{ .Date }}
image: ""
categories: []
author: "HaleyCH"
tags: []
draft: true
keywords: []
appleScreenShot: false
# slug: {{ substr (md5 (printf "%s%s" .Date (replace .TranslationBaseName "-" " " | title))) 4 8 }}
---

{{< notice "tip" >}}
{{< /notice >}}

{{< notice "note" >}}
{{< /notice >}}