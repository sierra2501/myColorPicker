
mode = TARGET_MODE
diff_color = TARGET_RGB

# 抽出する
if mode == "EXTRACT":
    diff_color = xshade.scene().active_shape().surface.diffuse_color

    # 文字列化とカッコの削除
    diff_color = str(diff_color)
    diff_color = diff_color.replace("(", "")
    diff_color = diff_color.replace(")", "")

    result = diff_color

# 設定する
elif mode == "SET":
    xshade.scene().active_shape().surface.diffuse_color = diff_color


