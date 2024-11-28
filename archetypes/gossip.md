---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "{{ replace .Name "-" " " | title }}"
meta_title: ""
description: ""
date: {{ .Date }}
image: ""
author: "HaleyCH"
draft: true
# slug: {{ substr (md5 (printf "%s%s" .Date (replace .TranslationBaseName "-" " " | title))) 4 8 }}
---
