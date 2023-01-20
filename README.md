# Mitre-Attack-Linux-Enterprise
This Github repository was designed to better align the tactics and techniques representing the MITRE ATT&amp;CK® Matrix for Enterprise's that run the Linux platform within their organization.

| ID | Data Source | Data Component | Detects |
| --- | --- | --- | --- |
| `DS0015` | Application Log | Application Log Content | Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do *reputation-based analytics* on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before. |
| `DS0022` | File | File Creation | Monitor for newly constructed files written to disk to gain access to a system through a user visiting a website over the normal course of browsing. |
