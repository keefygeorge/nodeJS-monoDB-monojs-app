 Dim objWshShell, ls, lc
 set objWshShell = WScript.CreateObject("WScript.Shell")
 ls = objWshShell.Run("cmd /k cd /d d:\nodejs && node client.js", 1, false)
 lc = objWshShell.Run("chrome localhost:8888", 1, false)
 set objWshShell = nothing